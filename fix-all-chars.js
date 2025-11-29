// Final comprehensive fix for ALL special characters
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

        // Check for any non-ASCII characters and replace them
        let charCounts = {};
        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            const code = content.charCodeAt(i);
            // Track any character above ASCII range (> 127) except newlines
            if (code > 127 && code !== 8232 && code !== 8233) {
                charCounts[code] = (charCounts[code] || 0) + 1;
            }
        }

        if (Object.keys(charCounts).length > 0) {
            console.log(`  Found non-ASCII characters:`);
            Object.keys(charCounts).sort((a, b) => b - a).forEach(code => {
                const char = String.fromCharCode(code);
                console.log(`    U+${code.toString(16).toUpperCase().padStart(4, '0')} (${char}): ${charCounts[code]} occurrences`);
            });
        }

        // Comprehensive replacements
        const replacements = [
            // All quote variations
            { from: /[\u0022\u201C\u201D\u201E\u201F\u2033\u2036\u275D\u275E\u301D\u301E]/g, to: '"', name: 'quotes' },
            // All apostrophe variations  
            { from: /[\u0027\u2018\u2019\u201A\u201B\u2032\u2035]/g, to: "'", name: 'apostrophes' },
            // All dash variations
            { from: /[\u002D\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g, to: '-', name: 'dashes' },
            // Ellipsis
            { from: /\u2026/g, to: '...', name: 'ellipsis' },
            // Spaces
            { from: /[\u00A0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F]/g, to: ' ', name: 'special spaces' },
            // Rupee symbol (keep as is, but log)
            // Currency and other symbols that should stay
        ];

        replacements.forEach(({ from, to, name }) => {
            const before = content;
            content = content.replace(from, to);
            if (content !== before) {
                const count = (before.match(from) || []).length;
                console.log(`  - Replaced ${count} ${name}`);
                fileFixes += count;
            }
        });

        // Save if changes were made
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`  ✓ Fixed ${fileFixes} characters`);
            totalFixes += fileFixes;
        } else {
            console.log(`  - No fixes needed`);
        }
    } else {
        console.log(`  ✗ File not found: ${fullPath}`);
    }
});

console.log(`\n========================================`);
console.log(`✅ Final fix complete!`);
console.log(`Total fixes: ${totalFixes}`);
console.log(`========================================`);
