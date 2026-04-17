/*
 * Generates two comparison txt files against Season 12:
 *   - solo-tier-comparison.txt   (from solo-data.json + solos12.html)
 *   - group-tier-comparison.txt  (from group-data.json + groups12.html, bucketed by team type)
 *
 * Also syncs the web-app data files from their JSON sources:
 *   - solo-data.js  <- solo-data.json   (prefix: `window.soloData = `)
 *   - group-data.js <- group-data.json  (prefix: `window.groupData = `, trailing `;`)
 *
 * Row format (both txt files):
 *   `<Bucket> - <Build Name> - <Current Tier>`                      (tier unchanged from S12)
 *   `<Bucket> - <Build Name> - <S12 Tier> -> <Current Tier>`        (tier changed)
 *   `<Bucket> - <Build Name> - <Current Tier>  [New]`               (build not in S12 list)
 * Builds inside each bucket are sorted by current tier: Top, Good, Decent, Mid, Bad, then others.
 *
 * By default, rows with no change (same tier in S12, not [New]) are hidden.
 * Pass `--all` (or `-a`) to include unchanged rows too.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const SHOW_ALL = args.includes('--all') || args.includes('-a');

const TIER_BADGE = {
  'text-bg-info': 'Top',
  'text-bg-primary': 'Good',
  'text-bg-success': 'Decent',
  'text-bg-warning': 'Mid',
  'text-bg-danger': 'Bad',
};
const TIER_RANK = { Top: 0, Good: 1, Decent: 2, Mid: 3, Bad: 4 };
const rankOf = (t) => (t in TIER_RANK ? TIER_RANK[t] : 99);
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

function sortBuilds(builds) {
  return builds.slice().sort((a, b) => {
    const r = rankOf(a.tier) - rankOf(b.tier);
    if (r !== 0) return r;
    return a.buildName.localeCompare(b.buildName);
  });
}

function lookup(map, buildName) {
  if (!map) return null;
  if (map.has(buildName)) return map.get(buildName);
  const target = normalize(buildName);
  for (const [name, tier] of map.entries()) {
    if (normalize(name) === target) return tier;
  }
  for (const [name, tier] of map.entries()) {
    const nk = normalize(name);
    if (nk.includes(target) || target.includes(nk)) return tier;
  }
  return null;
}

// Returns { line, kind } where kind is 'same' | 'changed' | 'new'.
// Caller decides whether to include 'same' rows based on SHOW_ALL.
function makeRow(bucket, buildName, currTier, s12Tier) {
  if (s12Tier == null) {
    return { line: `${bucket} - ${buildName} - ${currTier}  [New]`, kind: 'new' };
  }
  if (s12Tier !== currTier) {
    return { line: `${bucket} - ${buildName} - ${s12Tier} -> ${currTier}`, kind: 'changed' };
  }
  return { line: `${bucket} - ${buildName} - ${currTier}`, kind: 'same' };
}

function emit(out, row) {
  if (row.kind === 'same' && !SHOW_ALL) return false;
  out.push(row.line);
  return true;
}

// ---------- SOLO ----------
function parseSolos12Tiers() {
  const html = fs.readFileSync(path.join(ROOT, 'solos12.html'), 'utf8');
  const result = {}; // className -> Map(buildName -> tier)
  const tbodyRegex = /<tbody[^>]*id="tbody([A-Za-z]+)"[^>]*>([\s\S]*?)<\/tbody>/g;
  let m;
  while ((m = tbodyRegex.exec(html)) !== null) {
    const className = m[1];
    const block = m[2];
    const map = new Map();
    const trRegex = /<tr>([\s\S]*?)<\/tr>/g;
    let tr;
    while ((tr = trRegex.exec(block)) !== null) {
      const row = tr[1];
      const tdMatch = row.match(/<td>\s*([^<]+?)\s*<\/td>\s*<td>\s*<span[^>]*class="[^"]*\b(text-bg-[a-z]+)\b[^"]*"[^>]*>\s*([^<]+?)\s*<\/span>/);
      if (tdMatch) {
        const buildName = tdMatch[1].replace(/&amp;/g, '&').trim();
        const tier = TIER_BADGE[tdMatch[2]] || tdMatch[3].trim();
        map.set(buildName, tier);
      }
    }
    result[className] = map;
  }
  return result;
}

function buildSoloFile() {
  const solo = JSON.parse(fs.readFileSync(path.join(ROOT, 'solo-data.json'), 'utf8'));
  const s12 = parseSolos12Tiers();
  const classOrder = ['Sorceress', 'Druid', 'Assassin', 'Barbarian', 'Amazon', 'Necromancer', 'Paladin'];
  const classes = Object.keys(solo.classBuilds);
  const ordered = [
    ...classOrder.filter((c) => classes.includes(c)),
    ...classes.filter((c) => !classOrder.includes(c)),
  ];

  const header = [
    `Solo Tier Comparison — Season ${solo.season} vs Season 12`,
    `Format: Class - Build - Current Tier  (or "S12 -> Current" if changed, "[New]" if not in S12)`,
    SHOW_ALL ? 'Mode: showing all rows (--all)' : 'Mode: hiding unchanged rows (pass --all to include them)',
    '='.repeat(80),
    '',
  ];
  const out = [...header];

  for (const cls of ordered) {
    const classLines = [];
    for (const b of sortBuilds(solo.classBuilds[cls] || [])) {
      const s12Tier = lookup(s12[cls], b.buildName);
      const row = makeRow(cls, b.buildName, b.tier, s12Tier);
      if (row.kind === 'same' && !SHOW_ALL) continue;
      classLines.push(row.line);
    }
    if (classLines.length === 0) continue;
    out.push(`--- ${cls} ---`);
    out.push(...classLines);
    out.push('');
  }

  const outPath = path.join(ROOT, 'solo-tier-comparison.txt');
  fs.writeFileSync(outPath, out.join('\n'), 'utf8');
  return outPath;
}

// ---------- GROUP ----------
function parseGroups12() {
  const html = fs.readFileSync(path.join(ROOT, 'groups12.html'), 'utf8');
  const physIdx = html.indexOf('Physical Focused P8 Mapping');
  const eleIdx = html.indexOf('Elemental Focused P8 Mapping');
  const generalistsChunk = physIdx >= 0 ? html.slice(0, physIdx) : html;
  const physicalChunk = physIdx >= 0 && eleIdx >= 0 ? html.slice(physIdx, eleIdx) : '';
  const elementalChunk = eleIdx >= 0 ? html.slice(eleIdx) : '';

  const generalists = new Set();
  const genRegex = /<tr class="table-[a-z]+">\s*<td>\s*([^<]+?)\s*<\/td>/g;
  let g;
  while ((g = genRegex.exec(generalistsChunk)) !== null) {
    generalists.add(normalize(g[1].replace(/&amp;/g, '&').trim()));
  }

  function parseClassTbodies(chunk) {
    const out = {};
    const tbodyRegex = /<tbody[^>]*id="tbody([A-Za-z]+?)(?:\d*)"[^>]*>([\s\S]*?)<\/tbody>/g;
    let m;
    while ((m = tbodyRegex.exec(chunk)) !== null) {
      const className = m[1];
      const block = m[2];
      const map = out[className] || new Map();
      const trRegex = /<tr>([\s\S]*?)<\/tr>/g;
      let tr;
      while ((tr = trRegex.exec(block)) !== null) {
        const row = tr[1];
        const tdMatch = row.match(/<td>\s*([^<]+?)\s*<\/td>\s*<td>\s*<span[^>]*class="[^"]*\b(text-bg-[a-z]+)\b[^"]*"[^>]*>\s*([^<]+?)\s*<\/span>/);
        if (tdMatch) {
          const buildName = tdMatch[1].replace(/&amp;/g, '&').trim();
          const tier = TIER_BADGE[tdMatch[2]] || tdMatch[3].trim();
          map.set(buildName, tier);
        }
      }
      out[className] = map;
    }
    return out;
  }

  return {
    generalists,
    physical: parseClassTbodies(physicalChunk),
    elemental: parseClassTbodies(elementalChunk),
  };
}

function buildGroupFile() {
  const group = JSON.parse(fs.readFileSync(path.join(ROOT, 'group-data.json'), 'utf8'));
  const s12 = parseGroups12();
  const classOrder = ['Sorceress', 'Druid', 'Assassin', 'Barbarian', 'Amazon', 'Necromancer', 'Paladin'];

  const header = [
    `Group Tier Comparison — Season ${group.season} vs Season 12`,
    `Bucketed by team type: Generalist, Physical, Elemental`,
    `Format: Bucket - Build - Current Tier  (or "S12 -> Current" if changed, "[New]" if not in S12)`,
    SHOW_ALL ? 'Mode: showing all rows (--all)' : 'Mode: hiding unchanged rows (pass --all to include them)',
    '='.repeat(80),
    '',
  ];
  const out = [...header];

  // Generalists: no current tier — only reportable state is [New] vs existed.
  // "Unchanged" in this bucket means "existed in S12"; hidden by default.
  const genSectionLines = [];
  const genBuilds = (group.generalists && group.generalists.builds) || [];
  for (const b of genBuilds) {
    const existed = s12.generalists.has(normalize(b.buildName));
    if (existed && !SHOW_ALL) continue;
    const suffix = existed ? '' : '  [New]';
    genSectionLines.push(`Generalist - ${b.className} - ${b.buildName}${suffix}`);
  }
  if (genSectionLines.length) {
    out.push('=== Generalist ===');
    out.push(...genSectionLines);
    out.push('');
  }

  // Physical + Elemental (tiered, grouped by class)
  for (const [key, label] of [['physical', 'Physical'], ['elemental', 'Elemental']]) {
    const section = group[key];
    if (!section || !section.classBuilds) continue;
    const classes = Object.keys(section.classBuilds);
    const ordered = [
      ...classOrder.filter((c) => classes.includes(c)),
      ...classes.filter((c) => !classOrder.includes(c)),
    ];
    const s12Map = s12[key] || {};
    const sectionLines = [];
    for (const cls of ordered) {
      const classLines = [];
      for (const b of sortBuilds(section.classBuilds[cls] || [])) {
        const s12Tier = lookup(s12Map[cls], b.buildName);
        const row = makeRow(`${label} | ${cls}`, b.buildName, b.tier, s12Tier);
        if (row.kind === 'same' && !SHOW_ALL) continue;
        classLines.push(row.line);
      }
      if (classLines.length) {
        sectionLines.push(`--- ${cls} ---`);
        sectionLines.push(...classLines);
        sectionLines.push('');
      }
    }
    if (sectionLines.length) {
      out.push(`=== ${label} ===`);
      out.push(...sectionLines);
    }
  }

  const outPath = path.join(ROOT, 'group-tier-comparison.txt');
  fs.writeFileSync(outPath, out.join('\n'), 'utf8');
  return outPath;
}

// ---------- .js SYNC ----------
function syncJsFromJson(jsonName, jsName, globalVar, trailing) {
  const json = fs.readFileSync(path.join(ROOT, jsonName), 'utf8').trimEnd();
  // json is already pretty-printed with 2-space indent; preserve it verbatim so diffs stay minimal.
  const content = `window.${globalVar} = ${json}${trailing}`;
  fs.writeFileSync(path.join(ROOT, jsName), content, 'utf8');
  return path.join(ROOT, jsName);
}

// Match existing CRLF line endings in solo-data.js / group-data.js.
const syncedSolo = syncJsFromJson('solo-data.json', 'solo-data.js', 'soloData', '\r\n');
const syncedGroup = syncJsFromJson('group-data.json', 'group-data.js', 'groupData', '\r\n;\r\n');
const soloPath = buildSoloFile();
const groupPath = buildGroupFile();
console.log('Synced', syncedSolo);
console.log('Synced', syncedGroup);
console.log('Wrote', soloPath);
console.log('Wrote', groupPath);
console.log(SHOW_ALL ? '(showing all rows)' : '(hiding unchanged rows — pass --all to include them)');
