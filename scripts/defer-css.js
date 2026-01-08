const fs = require('fs');
const path = require('path');

// Recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.log('❌ out directory not found. Run "npm run build" first.');
  process.exit(1);
}

const htmlFiles = findHtmlFiles(outDir);
let totalModified = 0;

htmlFiles.forEach((filePath) => {
  let html = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let criticalCount = 0;
  const MAX_CRITICAL = 1;

  // Function to check if CSS should be kept critical (not deferred)
  function isCriticalCSS(href) {
    // Keep CaseStudy CSS files as critical to prevent layout shifts
    if (href.includes('casestudy') || href.includes('casestudytwo') || href.includes('casestudythree')) {
      return true;
    }
    // Keep Swiper CSS as critical if CaseStudy is on page
    if (href.includes('swiper')) {
      return true;
    }
    // Keep main app CSS as critical
    if (href.includes('_app') || href.includes('globals')) {
      return true;
    }
    return false;
  }

  // Match all stylesheet links - handle different formats
  html = html.replace(
    /<link\s+[^>]*rel=["']stylesheet["'][^>]*>/gi,
    (match) => {
      // Extract href from the match (handle both quoted and unquoted)
      const hrefMatch = match.match(/href=["']([^"']+)["']/);
      if (!hrefMatch) return match;
      
      const href = hrefMatch[1];
      
      // Keep critical CSS files (CaseStudy, Swiper, main app CSS)
      if (isCriticalCSS(href)) {
        return match; // Keep as is - don't defer
      }
      
      // Keep first non-chunk CSS file as critical
      if (criticalCount < MAX_CRITICAL && !href.includes('/chunks/')) {
        criticalCount++;
        return match; // Keep as is
      }

      // Defer all chunk CSS files (except critical ones already handled above)
      if (href.includes('/chunks/') && href.endsWith('.css')) {
        modified = true;
        // Remove existing media, onload, onerror, data-deferred attributes
        let newMatch = match
          .replace(/\s+media=["'][^"']*["']/gi, '')
          .replace(/\s+onload=["'][^"']*["']/gi, '')
          .replace(/\s+onerror=["'][^"']*["']/gi, '')
          .replace(/\s+data-deferred=["'][^"']*["']/gi, '');
        
        // Handle self-closing tags - insert before />
        if (newMatch.endsWith('/>')) {
          newMatch = newMatch.replace(/\/>$/, ' media="print" data-deferred="true" onload="this.media=\'all\'" onerror="this.media=\'all\'" />');
        } else {
          // Handle regular closing tags - insert before >
          newMatch = newMatch.replace(/>$/, ' media="print" data-deferred="true" onload="this.media=\'all\'" onerror="this.media=\'all\'">');
        }
        return newMatch;
      }

      return match;
    }
  );

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf8');
    totalModified++;
    console.log(`✅ Modified: ${path.relative(process.cwd(), filePath)}`);
  }
});

console.log(`\n🎉 Deferred CSS in ${totalModified} HTML file(s)`);

