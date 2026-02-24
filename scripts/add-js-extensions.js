/**
 * Post-build script para adicionar extensões .js aos imports compilados
 * Necessário para suporte adequado a ES modules
 */
const fs = require('fs');
const path = require('path');

function addJsExtensions(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      addJsExtensions(filePath);
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf-8');

      // Add .js extension to relative imports
      content = content.replace(
        /from\s+['"](\.[^'"\.]+)['"];/g,
        "from '$1.js';"
      );
      content = content.replace(
        /from\s+["'](\.[^'"\.]+)["'];/g,
        'from "$1.js";'
      );

      fs.writeFileSync(filePath, content);
    }
  });
}

// Run the function (relative to project root)
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  addJsExtensions(distPath);
  console.log('✓ Post-build: Added .js extensions to compiled files');
} else {
  console.log('⚠ dist directory not found');
}
