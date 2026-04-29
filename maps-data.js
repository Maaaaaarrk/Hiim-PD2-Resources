// Shared maps data — used by solo.html, maps.html, group.html
// Time values are decimal minutes (e.g. 4.39 = 4 min 23.4s). Consumers round to nearest 5s.
// `mfFullClear` = default Solo MF (full clear). `mfEliteSkip` = alternative Solo MF (elite skip).
window.mapsData = {
	season: 13,

	// ===== Season 13 (current) =====
	s13: [
		// Tier 3
		{ name: 'Kehjistan Marketplace', slug: 'marketplace', tier: 3,
			exp98: [4.39, 6.58, 8.77], expNone: [4.42, 6.62, 8.83],
			mfEliteSkip: [4.30, 6.46, 8.61], mfFullClear: [4.95, 7.42, 9.90],
			itemDropCount: 1367,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:2,v:'120',c:'220,60,40'}] },
		{ name: 'Arreat Battlefield', slug: 'arreatbattlefield', tier: 3,
			exp98: [4.13, 6.19, 8.25], expNone: [4.23, 6.34, 8.46],
			mfEliteSkip: [4.03, 6.05, 8.07], mfFullClear: [4.63, 6.95, 9.27],
			itemDropCount: 1280,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:3,v:'120',c:'220,200,40'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Demon Road', slug: 'demonroad', tier: 3,
			exp98: [4.01, 6.01, 8.01], expNone: [4.03, 6.05, 8.07],
			mfEliteSkip: [3.81, 5.71, 7.62], mfFullClear: [4.44, 6.66, 8.88],
			itemDropCount: 1226,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:2,v:'120',c:'220,60,40'},{i:3,v:'120',c:'220,200,40'}] },
		{ name: 'Royal Crypts', slug: 'royalcrypts', tier: 3,
			exp98: [3.56, 5.33, 7.11], expNone: [3.58, 5.37, 7.16],
			mfEliteSkip: [3.80, 5.71, 7.61], mfFullClear: [4.36, 6.54, 8.72],
			itemDropCount: 1205,
			elems: [{i:2,v:'120',c:'220,60,40'},{i:4,v:'120',c:'60,140,220'}] },
		{ name: 'River of Blood', slug: 'riverblood', tier: 3,
			exp98: [3.37, 5.06, 6.75], expNone: [3.72, 5.58, 7.43],
			mfEliteSkip: [3.96, 5.94, 7.92], mfFullClear: [4.55, 6.83, 9.11],
			itemDropCount: 1258,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:3,v:'120',c:'220,200,40'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Bastion Keep', slug: 'bastion', tier: 3,
			exp98: [3.20, 4.79, 6.39], expNone: [3.65, 5.47, 7.30],
			mfEliteSkip: [4.05, 6.08, 8.11], mfFullClear: [4.61, 6.92, 9.22],
			itemDropCount: 1274,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:1,v:'105',c:'180,80,220'},{i:4,v:'120',c:'60,140,220'}] },
		{ name: 'Blood Moon', slug: 'bloodmoon', tier: 3,
			exp98: [2.89, 4.34, 5.78], expNone: [3.46, 5.19, 6.92],
			mfEliteSkip: [5.29, 7.93, 10.58], mfFullClear: [5.77, 8.65, 11.53],
			itemDropCount: 1593,
			elems: [] },
		{ name: 'Skovos Stronghold', slug: 'skovos', tier: 3,
			exp98: null, expNone: null,
			mfEliteSkip: null, mfFullClear: null,
			itemDropCount: null,
			elems: [{i:4,v:'120',c:'60,140,220'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Kyovoshad', slug: 'kyovoshad', tier: 3,
			exp98: null, expNone: null,
			mfEliteSkip: null, mfFullClear: null,
			itemDropCount: null,
			elems: [] },

		// Tier 2
		{ name: 'Pandemonium Citadel', slug: 'citadel', tier: 2,
			exp98: [3.65, 5.48, 7.30], expNone: [4.92, 7.38, 9.84],
			mfEliteSkip: [2.52, 3.78, 5.04], mfFullClear: [3.01, 4.51, 6.01],
			itemDropCount: 977,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:4,v:'120',c:'60,140,220'}] },
		{ name: 'Halls of Torture', slug: 'hallsoftorture', tier: 2,
			exp98: [3.16, 4.74, 6.32], expNone: [5.32, 7.98, 10.64],
			mfEliteSkip: [4.05, 6.07, 8.10], mfFullClear: [4.59, 6.89, 9.18],
			itemDropCount: 1492,
			elems: [{i:3,v:'120',c:'220,200,40'},{i:4,v:'120',c:'60,140,220'}] },
		{ name: 'Sanatorium', slug: 'sanatorium', tier: 2,
			exp98: [3.09, 4.64, 6.18], expNone: [4.41, 6.62, 8.82],
			mfEliteSkip: [2.94, 4.41, 5.88], mfFullClear: [3.52, 5.28, 7.03],
			itemDropCount: 1143,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:3,v:'120',c:'220,200,40'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Ashen Plains', slug: 'ashen', tier: 2,
			exp98: [2.91, 4.37, 5.82], expNone: [4.92, 7.38, 9.84],
			mfEliteSkip: [3.80, 5.70, 7.59], mfFullClear: [4.28, 6.42, 8.55],
			itemDropCount: 1390,
			elems: [{i:2,v:'120',c:'220,60,40'},{i:4,v:'130',c:'60,140,220'}] },
		{ name: 'Sewers of Harrogath', slug: 'sewers', tier: 2,
			exp98: [2.70, 4.04, 5.39], expNone: [3.94, 5.90, 7.87],
			mfEliteSkip: [3.10, 4.65, 6.20], mfFullClear: [3.62, 5.42, 7.23],
			itemDropCount: 1175,
			elems: [{i:2,v:'120',c:'220,60,40'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Throne of Insanity', slug: 'throne', tier: 2,
			exp98: [2.56, 3.84, 5.13], expNone: [4.00, 6.00, 8.00],
			mfEliteSkip: [3.40, 5.10, 6.80], mfFullClear: [3.89, 5.83, 7.77],
			itemDropCount: 1263,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Ruined Cistern', slug: 'cistern', tier: 2,
			exp98: [2.27, 3.41, 4.54], expNone: [3.61, 5.41, 7.22],
			mfEliteSkip: [2.67, 4.01, 5.34], mfFullClear: [3.19, 4.79, 6.39],
			itemDropCount: 1038,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Canyon of Sescheron', slug: 'canyon', tier: 2,
			exp98: [2.20, 3.29, 4.39], expNone: [4.19, 6.29, 8.38],
			mfEliteSkip: [4.86, 7.30, 9.73], mfFullClear: [5.37, 8.05, 10.74],
			itemDropCount: 1745,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:2,v:'120',c:'220,60,40'}] },
		{ name: "Horazon's Memory", slug: 'horazonsmemory', tier: 2,
			exp98: [2.04, 3.05, 4.07], expNone: [4.10, 6.14, 8.19],
			mfEliteSkip: [3.87, 5.81, 7.75], mfFullClear: [4.33, 6.49, 8.66],
			itemDropCount: 1407,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:3,v:'120',c:'220,200,40'}] },

		// Tier 1
		{ name: 'Phlegethon', slug: 'phlegethon', tier: 1,
			exp98: [1.71, 2.56, 3.42], expNone: [4.50, 6.76, 9.01],
			mfEliteSkip: [4.55, 6.82, 9.10], mfFullClear: [5.11, 7.67, 10.23],
			itemDropCount: 1662,
			elems: [{i:2,v:'120',c:'220,60,40'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Fall of Caldeum', slug: 'caldeum', tier: 1,
			exp98: [1.62, 2.43, 3.24], expNone: [3.51, 5.26, 7.02],
			mfEliteSkip: [2.43, 3.65, 4.86], mfFullClear: [2.86, 4.28, 5.71],
			itemDropCount: 928,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:1,v:'105',c:'180,80,220'},{i:3,v:'120',c:'220,200,40'}] },
		{ name: 'Torajan Jungle', slug: 'torajanjungle', tier: 1,
			exp98: [1.60, 2.40, 3.19], expNone: [4.73, 7.09, 9.46],
			mfEliteSkip: [4.48, 6.72, 8.95], mfFullClear: [4.99, 7.49, 9.99],
			itemDropCount: 1623,
			elems: [{i:4,v:'120',c:'60,140,220'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Ancestral Trial', slug: 'ancestral', tier: 1,
			exp98: [1.54, 2.31, 3.08], expNone: [4.05, 6.07, 8.10],
			mfEliteSkip: [3.91, 5.87, 7.82], mfFullClear: [4.45, 6.67, 8.89],
			itemDropCount: 1445,
			elems: [{i:2,v:'120',c:'220,60,40'},{i:3,v:'120',c:'220,200,40'}] },
		{ name: 'Lost Temple', slug: 'losttemple', tier: 1,
			exp98: [1.49, 2.24, 2.98], expNone: [3.73, 5.59, 7.46],
			mfEliteSkip: [2.70, 4.05, 5.40], mfFullClear: [3.04, 4.56, 6.09],
			itemDropCount: 989,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:4,v:'120',c:'60,140,220'}] },
		{ name: 'Ruins of Viz-Jun', slug: 'ruinsofvizjun', tier: 1,
			exp98: [1.37, 2.06, 2.74], expNone: [4.01, 6.01, 8.01],
			mfEliteSkip: [4.03, 6.05, 8.07], mfFullClear: [4.56, 6.84, 9.13],
			itemDropCount: 1483,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:4,v:'120',c:'60,140,220'}] },
		{ name: 'Shadows of Westmarch', slug: 'westmarch', tier: 1,
			exp98: [1.36, 2.04, 2.72], expNone: [3.17, 4.75, 6.33],
			mfEliteSkip: [2.97, 4.45, 5.93], mfFullClear: [3.46, 5.20, 6.93],
			itemDropCount: 1126,
			elems: [{i:1,v:'105',c:'180,80,220'},{i:2,v:'120',c:'220,60,40'},{i:5,v:'120',c:'80,200,80'}] },
		{ name: 'Tomb of Zoltun Kulle', slug: 'zoltun', tier: 1,
			exp98: [1.29, 1.94, 2.59], expNone: [3.29, 4.93, 6.57],
			mfEliteSkip: [3.85, 5.78, 7.70], mfFullClear: [4.38, 6.56, 8.75],
			itemDropCount: 1422,
			elems: [{i:0,v:'115',c:'160,160,160'},{i:5,v:'120',c:'80,200,80'}] }
	],

	// ===== Season 12 (archive) =====
	// S12 had a single Solo/MF time variant (no Elite Skip / Full Clear split).
	s12: {
		mfData: [
			{ tier: 3, maps: [
				{ name: 'Canyon of Sescheron', slug: 'canyon', top: '5:45', good: '8:35', decent: '11:25', elems: [{i:0,v:'120',c:'160,160,160'},{i:2,v:'130',c:'220,60,40'},{i:5,v:'110',c:'80,200,80'}] },
				{ name: 'Phlegethon', slug: 'phlegethon', top: '5:20', good: '8:00', decent: '10:40', elems: [{i:2,v:'140',c:'220,60,40'},{i:3,v:'125',c:'220,200,40'}] },
				{ name: 'Blood Moon', slug: 'bloodmoon', top: '5:15', good: '7:55', decent: '10:35', elems: [] },
				{ name: 'Ashen Plains', slug: 'ashen', top: '4:30', good: '6:40', decent: '8:55', elems: [{i:1,v:'120',c:'180,80,220'},{i:4,v:'130',c:'60,140,220'},{i:5,v:'130',c:'80,200,80'}] },
				{ name: 'Kehjistan Marketplace', slug: 'marketplace', top: '4:20', good: '6:30', decent: '8:35', elems: [{i:2,v:'125',c:'220,60,40'},{i:4,v:'130',c:'60,140,220'},{i:5,v:'105',c:'80,200,80'}] },
				{ name: 'Throne of Insanity', slug: 'throne', top: '4:00', good: '6:00', decent: '8:00', elems: [{i:2,v:'130',c:'220,60,40'},{i:4,v:'130',c:'60,140,220'}] },
				{ name: 'Sanatorium', slug: 'sanatorium', top: '3:30', good: '5:10', decent: '6:55', elems: [{i:3,v:'125',c:'220,200,40'},{i:5,v:'130',c:'80,200,80'}] },
				{ name: 'Ruined Cistern', slug: 'cistern', top: '3:10', good: '4:45', decent: '6:15', elems: [{i:1,v:'125',c:'180,80,220'},{i:3,v:'135',c:'220,200,40'},{i:4,v:'115',c:'60,140,220'}] },
				{ name: 'Pandemonium Citadel', slug: 'citadel', top: '3:00', good: '4:25', decent: '5:55', elems: [{i:0,v:'100',c:'160,160,160'},{i:3,v:'135',c:'220,200,40'},{i:5,v:'130',c:'80,200,80'}] }
			]},
			{ tier: 2, maps: [
				{ name: 'Ruins of Viz-Jun', slug: 'ruinsofvizjun', top: '3:30', good: '5:15', decent: '7:00', elems: [{i:2,v:'130',c:'220,60,40'},{i:3,v:'120',c:'220,200,40'}] },
				{ name: 'Ancestral Trial', slug: 'ancestral', top: '3:25', good: '5:05', decent: '6:50', elems: [{i:5,v:'120',c:'80,200,80'}] },
				{ name: 'Tomb of Zoltun Kulle', slug: 'zoltun', top: '3:20', good: '5:00', decent: '6:45', elems: [{i:0,v:'105',c:'160,160,160'},{i:3,v:'120',c:'220,200,40'},{i:5,v:'110',c:'80,200,80'}] },
				{ name: 'Bastion Keep', slug: 'bastion', top: '3:00', good: '4:30', decent: '6:00', elems: [{i:0,v:'110',c:'160,160,160'},{i:2,v:'125',c:'220,60,40'},{i:4,v:'130',c:'60,140,220'}] },
				{ name: 'River of Blood', slug: 'riverblood', top: '2:55', good: '4:25', decent: '5:50', elems: [{i:1,v:'100',c:'180,80,220'},{i:4,v:'180',c:'60,140,220'},{i:5,v:'130',c:'80,200,80'}] },
				{ name: 'Demon Road', slug: 'demonroad', top: '2:50', good: '4:15', decent: '5:40', elems: [{i:4,v:'125',c:'60,140,220'},{i:5,v:'135',c:'80,200,80'}] },
				{ name: 'Skovos Stronghold', slug: 'skovos', top: '2:25', good: '3:40', decent: '4:50', elems: [{i:0,v:'125',c:'160,160,160'},{i:2,v:'125',c:'220,60,40'},{i:3,v:'130',c:'220,200,40'}] },
				{ name: 'Lost Temple', slug: 'losttemple', top: '2:20', good: '3:30', decent: '4:40', elems: [{i:2,v:'120',c:'220,60,40'},{i:4,v:'110',c:'60,140,220'}] }
			]},
			{ tier: 1, maps: [
				{ name: 'Torajan Jungle', slug: 'torajanjungle', top: '4:00', good: '6:00', decent: '7:55', elems: [{i:2,v:'125',c:'220,60,40'},{i:3,v:'105',c:'220,200,40'}] },
				{ name: 'Halls of Torture', slug: 'hallsoftorture', top: '3:35', good: '5:25', decent: '7:10', elems: [] },
				{ name: "Horazon's Memory", slug: 'horazonsmemory', top: '3:25', good: '5:10', decent: '6:55', elems: [{i:2,v:'135',c:'220,60,40'},{i:4,v:'130',c:'60,140,220'}] },
				{ name: 'Arreat Battlefield', slug: 'arreatbattlefield', top: '3:00', good: '4:35', decent: '6:05', elems: [{i:2,v:'130',c:'220,60,40'},{i:3,v:'100',c:'220,200,40'}] },
				{ name: 'Royal Crypts', slug: 'royalcrypts', top: '2:50', good: '4:20', decent: '5:45', elems: [{i:1,v:'150',c:'180,80,220'},{i:4,v:'125',c:'60,140,220'},{i:5,v:'105',c:'80,200,80'}] },
				{ name: 'Sewers of Harrogath', slug: 'sewers', top: '2:45', good: '4:10', decent: '5:30', elems: [{i:3,v:'135',c:'220,200,40'},{i:5,v:'125',c:'80,200,80'}] },
				{ name: 'Shadows of Westmarch', slug: 'westmarch', top: '2:40', good: '3:55', decent: '5:15', elems: [{i:0,v:'100',c:'160,160,160'},{i:5,v:'135',c:'80,200,80'}] },
				{ name: 'Fall of Caldeum', slug: 'caldeum', top: '2:10', good: '3:15', decent: '4:20', elems: [{i:3,v:'100',c:'220,200,40'},{i:4,v:'130',c:'60,140,220'}] }
			]}
		],
		exp98: [
			{ tier: 3, maps: [
				['Pandemonium Citadel', 5.42, 8.13, 10.84], ['Ashen Plains', 4.68, 7.02, 9.36],
				['Sanatorium', 4.68, 7.02, 9.36], ['Kehjistan Marketplace', 4.39, 6.58, 8.77],
				['Throne of Insanity', 4.00, 6.00, 8.00], ['Phlegethon', 3.98, 5.97, 7.96],
				['Canyon of Sescheron', 3.70, 5.55, 7.40], ['Ruined Cistern', 3.50, 5.25, 7.01],
				['Blood Moon', 2.89, 4.34, 5.78]
			]},
			{ tier: 2, maps: [
				['Demon Road', 2.56, 3.84, 5.12], ['Ancestral Trial', 2.15, 3.23, 4.31],
				['Lost Temple', 2.09, 3.13, 4.17], ['River of Blood', 2.04, 3.06, 4.08],
				['Ruins of Viz-Jun', 1.91, 2.86, 3.81], ['Bastion Keep', 1.88, 2.83, 3.77],
				['Tomb of Zoltun Kulle', 1.81, 2.71, 3.62], ['Skovos Stronghold', 0.94, 1.41, 1.88]
			]},
			{ tier: 1, maps: [
				['Halls of Torture', 2.24, 3.36, 4.48], ['Sewers of Harrogath', 1.91, 2.86, 3.81],
				['Arreat Battlefield', 1.85, 2.78, 3.71], ['Fall of Caldeum', 1.62, 2.43, 3.24],
				['Royal Crypts', 1.62, 2.42, 3.23], ['Torajan Jungle', 1.60, 2.40, 3.19],
				["Horazon's Memory", 1.47, 2.20, 2.94], ['Shadows of Westmarch', 1.36, 2.04, 2.72]
			]}
		],
		expNone: [
			{ tier: 3, maps: [
				['Pandemonium Citadel', 4.92, 7.38, 9.84], ['Ashen Plains', 4.92, 7.38, 9.84],
				['Phlegethon', 4.50, 6.76, 9.01], ['Kehjistan Marketplace', 4.42, 6.62, 8.83],
				['Sanatorium', 4.41, 6.62, 8.82], ['Canyon of Sescheron', 4.19, 6.29, 8.38],
				['Throne of Insanity', 4.00, 6.00, 8.00], ['Ruined Cistern', 3.61, 5.41, 7.22],
				['Blood Moon', 3.46, 5.19, 6.92]
			]},
			{ tier: 2, maps: [
				['Ancestral Trial', 4.05, 6.07, 8.10], ['Demon Road', 4.03, 6.05, 8.07],
				['Ruins of Viz-Jun', 4.01, 6.01, 8.01], ['Lost Temple', 3.73, 5.59, 7.46],
				['River of Blood', 3.72, 5.58, 7.43], ['Skovos Stronghold', 3.67, 5.50, 7.33],
				['Bastion Keep', 3.65, 5.47, 7.30], ['Tomb of Zoltun Kulle', 3.29, 4.93, 6.57]
			]},
			{ tier: 1, maps: [
				['Halls of Torture', 5.32, 7.98, 10.64], ['Torajan Jungle', 4.73, 7.09, 9.46],
				['Arreat Battlefield', 4.23, 6.34, 8.46], ["Horazon's Memory", 4.10, 6.14, 8.19],
				['Sewers of Harrogath', 3.94, 5.90, 7.87], ['Royal Crypts', 3.58, 5.37, 7.16],
				['Fall of Caldeum', 3.51, 5.26, 7.02], ['Shadows of Westmarch', 3.17, 4.75, 6.33]
			]}
		]
	}
};

// Helpers used by all 3 consumer pages
window.mapsDataHelpers = {
	// Round decimal-minute value to nearest 5s and format as M:SS. Returns 'TBD' if null.
	fmtMin: function (v) {
		if (v == null) return 'TBD';
		var totalSec = Math.round(Math.round(v * 60) / 5) * 5;
		var m = Math.floor(totalSec / 60);
		var s = totalSec % 60;
		return m + ':' + (s < 10 ? '0' : '') + s;
	},

	// Build tier-grouped Solo/MF dataset for S13 in `{tier, maps:[{name,slug,top,good,decent,elems}]}` shape.
	// `variant` is 'fullClear' (default) or 'eliteSkip'.
	buildS13MfData: function (variant) {
		var fmt = this.fmtMin;
		var field = variant === 'eliteSkip' ? 'mfEliteSkip' : 'mfFullClear';
		var byTier = { 3: [], 2: [], 1: [] };
		window.mapsData.s13.forEach(function (m) {
			var arr = m[field];
			byTier[m.tier].push({
				name: m.name, slug: m.slug, elems: m.elems,
				top: fmt(arr ? arr[0] : null),
				good: fmt(arr ? arr[1] : null),
				decent: fmt(arr ? arr[2] : null),
				_topMin: arr ? arr[0] : null
			});
		});
		[3, 2, 1].forEach(function (t) {
			byTier[t].sort(function (a, b) {
				if (a._topMin == null) return 1;
				if (b._topMin == null) return -1;
				return b._topMin - a._topMin;
			});
		});
		return [
			{ tier: 3, maps: byTier[3] },
			{ tier: 2, maps: byTier[2] },
			{ tier: 1, maps: byTier[1] }
		];
	},

	// Build tier-grouped EXP dataset for S13 in `{tier, maps:[[name,top,good,decent]]}` shape.
	// `variant` is 'exp98' or 'expNone'.
	buildS13Exp: function (variant) {
		var byTier = { 3: [], 2: [], 1: [] };
		window.mapsData.s13.forEach(function (m) {
			var arr = m[variant];
			byTier[m.tier].push(arr
				? [m.name, arr[0], arr[1], arr[2]]
				: [m.name, 'TBD', 'TBD', 'TBD']);
		});
		[3, 2, 1].forEach(function (t) {
			byTier[t].sort(function (a, b) {
				if (a[1] === 'TBD') return 1;
				if (b[1] === 'TBD') return -1;
				return b[1] - a[1];
			});
		});
		return [
			{ tier: 3, maps: byTier[3] },
			{ tier: 2, maps: byTier[2] },
			{ tier: 1, maps: byTier[1] }
		];
	},

	// Element-resistance lookup keyed by map name (S13).
	getS13Elems: function () {
		var out = {};
		window.mapsData.s13.forEach(function (m) { out[m.name] = m.elems; });
		return out;
	}
};
