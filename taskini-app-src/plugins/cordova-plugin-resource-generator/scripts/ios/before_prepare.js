const fs = require('fs');
const run = require('cordova-res');
const utils = require('../utils.js');

console.log('Generating icons and splashscreens for iOS');

var options = {
  platforms: {
    ios: {
      icon: { sources: ['resources/icon.png'] },
      splash: { sources: ['resources/splash.png'] }
    }
  }
}

let tmpDir;
try {
  // Save existing resources
  tmpDir = utils.saveFiles("resources/ios/icon", ".png");
  utils.saveFiles("resources/ios/splash", ".png", tmpDir);
  
  run(options).then(function() {
      // Restore saved resources
      utils.restoreFiles(tmpDir, "resources/ios/icon", ".png");
      utils.restoreFiles(tmpDir, "resources/ios/splash", ".png");
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
