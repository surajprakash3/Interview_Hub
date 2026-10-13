const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'dsa3_raw.txt'), 'utf8');
const lines = raw.split(/\r?\n/);

let currentCat = 'Arrays';
const items = [];
const seenCats = new Set();

for (let line of lines) {
  line = line.trim();
  if (!line) continue;

  const match = line.match(/^(\d+)\s+(.+?)\s+(\d+|—|-)$/);
  if (match) {
    const id = parseInt(match[1], 10);
    const title = match[2].trim();
    const lcVal = match[3];
    const lc = (lcVal === '—' || lcVal === '-') ? null : parseInt(lcVal, 10);
    
    let url;
    if (lc) {
      url = `https://leetcode.com/problemset/all/?search=${encodeURIComponent(title)}`;
    } else {
      url = `https://www.google.com/search?q=${encodeURIComponent(title + ' practice problem')}`;
    }

    items.push({
      id,
      title,
      lc,
      cat: currentCat,
      url
    });
    seenCats.add(currentCat);
  } else {
    // Category line
    currentCat = line;
  }
}

console.log(`Parsed ${items.length} problems across ${seenCats.size} categories.`);

// Check for missing IDs
const parsedIds = new Set(items.map(i => i.id));
let missing = [];
for (let i = 1; i <= 1055; i++) {
  if (!parsedIds.has(i)) missing.push(i);
}
if (missing.length) {
  console.log(`Warning: Missing IDs: ${missing.slice(0, 10).join(', ')}... (total ${missing.length})`);
} else {
  console.log(`All 1055 IDs parsed continuously without gaps!`);
}

const jsContent = `/**
 * DSA 3: Comprehensive Placement Practice Sheet (1055 Problems)
 * Covers 44+ algorithmic topics from Arrays to Advanced Graph Algorithms & Dynamic Programming.
 */
const DSA3_SHEET_DATA = ${JSON.stringify(items, null, 2)};

const DSA3_CATEGORIES = ${JSON.stringify(Array.from(seenCats), null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'dsa3-sheet-data.js'), jsContent, 'utf8');
console.log('Saved dsa3-sheet-data.js successfully.');
