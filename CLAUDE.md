# CLAUDE.md

Instructions for Claude / future contributors when editing this repo.

## Updated timestamp

Whenever `solo.html`, `boss.html` (bossing), or `group.html` (or their backing data files `solo-data.json`/`solo-data.js`, `group-data.json`/`group-data.js`) is edited, refresh the "Updated" timestamp on that page to the current edit date.

- Use the shortened format: `Updated — <Month> <Dth> <YYYY>` (e.g. `Updated — April 20th 2026`).
- Ordinal suffix rules: `1st`, `2nd`, `3rd`, `21st`, `22nd`, `23rd`, `31st`; everything else is `th`.
- For `solo.html` and `group.html`, update the `updatedDate` field (and keep `bannerText` as `"Updated"`) in both the `.json` and `.js` data files so the banner stays in sync.
- For `boss.html`, update the inline `Updated — <date>` text near the top of the bosses table.
