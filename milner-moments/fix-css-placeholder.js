// fix-with-placeholders.js
const fs = require('fs');
const path = require('path');

// CSS files to process
const cssFiles = [
  'src/styles/components/CTA.css',
  'src/styles/pages/About.css',
  'src/styles/pages/Contact.css',
  'src/styles/pages/GalleryPage.css',
  'src/styles/pages/PricingPage.css',
  'src/styles/pages/ServicesPage.css'
];

// Process each file
cssFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  console.log(`Processing: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Create a backup first
  const backupPath = `${filePath}.backup`;
  fs.writeFileSync(backupPath, content);
  console.log(`Created backup: ${backupPath}`);
  
  // Replace placeholder image references with placekitten.com or placeholdit.imgix.net
  content = content.replace(
    /url\(['"]?\/api\/placeholder\/(\d+)\/(\d+)['"]?\)/g,
    (match, width, height) => {
      // Use placekitten.com which provides placeholder images
      return `url('https://placekitten.com/${width}/${height}')`;
      
      // Alternatively, you could use:
      // return `url('https://via.placeholder.com/${width}x${height}')`;
    }
  );
  
  // Save the modified file
  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
});

console.log('\nPlaceholder image URLs updated to use placekitten.com.');
console.log('If you want to restore any file, use the .backup files created.');