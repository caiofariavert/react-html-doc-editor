/**
 * Post-build script para:
 * 1. Adicionar extensões .js aos imports compilados
 * 2. Copiar arquivos CSS para dist/
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

      // Add .js extension to relative imports - matches both single and double quotes
      // Pattern: from [quote]./path/to/file[quote] -> from [quote]./path/to/file.js[quote]
      content = content.replace(
        /from\s+['"](\.[^'"]*?)(?<!\.js)['"];/g,
        "from '$1.js';"
      );

      fs.writeFileSync(filePath, content);
    }
  });
}

function copyCSS() {
  const srcCss = path.join(__dirname, '..', 'src', 'styles', 'editor.css');
  const distDir = path.join(__dirname, '..', 'dist', 'styles');
  const distCss = path.join(distDir, 'editor.css');

  // Create styles directory if it doesn't exist
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Copy CSS file
  if (fs.existsSync(srcCss)) {
    fs.copyFileSync(srcCss, distCss);
    console.log('✓ Post-build: Copied CSS files to dist/styles/');
  } else {
    console.log('⚠ CSS file not found');
  }
}

// Run functions
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  addJsExtensions(distPath);
  console.log('✓ Post-build: Added .js extensions to compiled files');
  copyCSS();
} else {
  console.log('⚠ dist directory not found');
}
