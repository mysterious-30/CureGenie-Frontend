// Comprehensive special character fix
const fs = require('fs');
const path = require('path');

const files = [
    "src/app/en/auth/page.tsx",
    "src/app/en/settings/page.tsx",
    "src/app/en/page.tsx",
    "src/app/en/quick-buy/page.tsx",
    "src/app/en/history/page.tsx",
    "src/app/en/health-analysis/page.tsx"
];

let totalFixes = 0;

files.forEach(file => {
    const fullPath = path.join(__dirname, file);

    if (fs.existsSync(fullPath)) {
        console.log(`\nProcessing: ${file}`);

        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;
        let fileFixes = 0;

        // More comprehensive replacements including all Unicode variants
        const replacements = [
            // Double quotes
            { from: /[\u201C\u201D\u201E\u201F\u2033\u2036]/g, to: '"', name: 'smart double quotes' },
            // Single quotes and apostrophes
            { from: /[\u2018\u2019\u201A\u201B\u2032\u2035]/g, to: "'", name: 'smart single quotes' },
            // Dashes
            { from: /[\u2013\u2014\u2015]/g, to: '-', name: 'em/en dashes' },
            // Ellipsis
            { from: /\u2026/g, to: '...', name: 'ellipsis' },
            // Other problematic characters
            { from: /\u00A0/g, to: ' ', name: 'non-breaking space' },
        ];

        replacements.forEach(({ from, to, name }) => {
            const matches = content.match(from);
            if (matches) {
                console.log(`  - Replacing ${matches.length} ${name}`);
                fileFixes += matches.length;
                content = content.replace(from, to);
            }
        });

        // Save if changes were made
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`  ✓ Fixed ${fileFixes} special characters`);
            totalFixes += fileFixes;
        } else {
            console.log(`  - No special characters found`);
        }
    } else {
        console.log(`  ✗ File not found: ${fullPath}`);
    }
});

console.log(`\n========================================`);
console.log(`✅ Comprehensive fix complete!`);
console.log(`Total fixes: ${totalFixes}`);
console.log(`========================================`);
