// Complete t() removal script - finds ALL remaining t() calls and replaces them
const fs = require('fs');
const path = require('path');

const files = [
    "src/app/en/settings/page.tsx",
    "src/app/en/quick-buy/page.tsx",
    "src/app/en/history/page.tsx",
    "src/app/en/health-analysis/page.tsx",
    "src/app/en/page.tsx"
];

let totalReplacements = 0;

files.forEach(file => {
    const fullPath = path.join(__dirname, file);

    if (fs.existsSync(fullPath)) {
        console.log(`\nProcessing: ${file}`);

        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;
        let fileReplacements = 0;

        // Find all t() calls
        const tCallPattern = /t\("([^"]+)"\)/g;
        const matches = content.match(tCallPattern);

        if (matches) {
            console.log(`  Found ${matches.length} t() calls`);
            matches.forEach(match => {
                console.log(`    - ${match}`);
            });

            // Replace with "PLACEHOLDER" for now - we'll need to map these manually
            // But at least we can see what needs replacing
            fileReplacements = matches.length;
        }

        // Save count
        if (fileReplacements > 0) {
            console.log(`  ⚠️  Needs ${fileReplacements} replacements`);
            totalReplacements += fileReplacements;
        } else {
            console.log(`  ✓ No t() calls found`);
        }
    } else {
        console.log(`  ✗ File not found: ${fullPath}`);
    }
});

console.log(`\n========================================`);
console.log(`Total t() calls remaining: ${totalReplacements}`);
console.log(`========================================`);
