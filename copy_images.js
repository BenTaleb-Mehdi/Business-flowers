const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\4b80d9f9-bcea-495b-bba6-5a3d812c9baf';
const destDir = 'c:\\Freelancing Local Projects\\Business-Flowers\\handtouch-web\\public';

const files = {
  'hero_lifestyle_1781361534024.png': 'hero_lifestyle.png',
  'dragees_custom_1781361549349.png': 'dragees_custom.png',
  'chocolat_custom_1781361563606.png': 'chocolat_custom.png',
  'invitation_custom_1781361584806.png': 'invitation_custom.png'
};

console.log('Starting copy operation...');
for (const [srcName, destName] of Object.entries(files)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied ${srcName} to ${destName}`);
  } catch (err) {
    console.error(`Failed copying ${srcName}:`, err.message);
  }
}
console.log('Copy operation completed.');
