const fs = require('fs');
const path = require('path');

const currentBrainDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\a325c894-dc7c-4b84-809e-58815d91eb62';
const prevBrainDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\4b80d9f9-bcea-495b-bba6-5a3d812c9baf';
const publicDir = 'c:\\Freelancing Local Projects\\Business-Flowers\\handtouch-web\\public';

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const fileMap = {
  // Current newly generated images
  [path.join(currentBrainDir, 'logo_branch_1781366886471.png')]: path.join(publicDir, 'logo_branch.png'),
  [path.join(currentBrainDir, 'hero_holding_flower_1781366902920.png')]: path.join(publicDir, 'hero_holding_flower.png'),
  [path.join(currentBrainDir, 'hero_bouquet_table_1781366919274.png')]: path.join(publicDir, 'hero_bouquet_table.png'),
  
  // Previous cached flower-related wedding images for fallback usage
  [path.join(prevBrainDir, 'hero_lifestyle_1781361534024.png')]: path.join(publicDir, 'hero_lifestyle.png'),
  [path.join(prevBrainDir, 'dragees_custom_1781361549349.png')]: path.join(publicDir, 'dragees_custom.png'),
  [path.join(prevBrainDir, 'chocolat_custom_1781361563606.png')]: path.join(publicDir, 'chocolat_custom.png'),
  [path.join(prevBrainDir, 'invitation_custom_1781361584806.png')]: path.join(publicDir, 'invitation_custom.png')
};

console.log('Copying assets...');
for (const [src, dest] of Object.entries(fileMap)) {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${path.basename(src)} to ${path.basename(dest)}`);
    } else {
      console.warn(`Source path does not exist: ${src}`);
    }
  } catch (error) {
    console.error(`Error copying ${src} to ${dest}:`, error.message);
  }
}
console.log('Done copying assets.');
