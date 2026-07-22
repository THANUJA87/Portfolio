import fs from 'fs';
import path from 'path';

const srcPath = 'C:\\Users\\thanu\\.gemini\\antigravity\\brain\\321f4d1c-2be9-4264-a14a-957407852851\\thanuja_profile_1784715420160.jpg';
const destPublic = path.resolve('public/thanuja.jpg');
const destAssets = path.resolve('src/assets/thanuja.jpg');

fs.copyFileSync(srcPath, destPublic);
fs.copyFileSync(srcPath, destAssets);
console.log('Successfully copied image to public/thanuja.jpg and src/assets/thanuja.jpg');
