const fs = require('fs-extra');
const pathfile = require('path');

const srcImagesDir = pathfile.join(__dirname, 'src/images');
const srcVideosDir = pathfile.join(__dirname, 'src/videos');
const distImagesDir = pathfile.join(__dirname, 'dist/images');
const distVideosDir = pathfile.join(__dirname, 'dist/videos');

// Check if the source directories exist and are not empty
const imagesExist = fs.existsSync(srcImagesDir) && fs.readdirSync(srcImagesDir).length > 0;
const videosExist = fs.existsSync(srcVideosDir) && fs.readdirSync(srcVideosDir).length > 0;

// Clean the destination directories if they exist
if (fs.existsSync(distImagesDir)) {
  fs.emptyDirSync(distImagesDir);
}

if (fs.existsSync(distVideosDir)) {
  fs.emptyDirSync(distVideosDir);
}

// Copy the directories only if they are not empty
if (imagesExist) {
  fs.copySync(srcImagesDir, distImagesDir);
}

if (videosExist) {
  fs.copySync(srcVideosDir, distVideosDir);
}

// You Should not Modify this file to prevent any issue unless you know webpack very well