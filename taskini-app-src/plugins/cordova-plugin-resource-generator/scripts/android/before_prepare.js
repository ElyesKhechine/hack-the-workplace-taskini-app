const fs = require('fs');
const run = require('cordova-res');
const utils = require('../utils.js');

console.log('Generating icons and splashscreens for Android');

var options = {
  platforms: {
    android: {
      icon: { sources: ['resources/icon.png'] },
      splash: { sources: ['resources/splash.png'] }
    }
  }
}


let tmpDir;
try {
  // Save existing resources
  tmpDir = utils.saveFiles("resources/android/icon", ".png");
  utils.saveFiles("resources/android/splash", ".png", tmpDir);
  
  run(options).then(function() {
      // Restore saved resources
      utils.restoreFiles(tmpDir, "resources/android/icon", ".png");
      utils.restoreFiles(tmpDir, "resources/android/splash", ".png");
    });
}
finally {
  try {
    if (tmpDir) {
      //FIXME fs.rmSync(tmpDir, { recursive: true });
    }
  }
  catch (e) {
    console.error(`An error has occurred while removing the temp folder at ${tmpDir}. Please remove it manually. Error: ${e}`);
  }
}
