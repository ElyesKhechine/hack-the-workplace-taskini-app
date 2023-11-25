const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

module.exports = function (context) {
  try {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/ios');
    const podfileLockPath = path.join(context.opts.projectRoot, "platforms", "ios", "Podfile.lock");
    const podsFolderPath = path.join(context.opts.projectRoot, "platforms", "ios", "Pods");
    
    if (!fs.existsSync(podfileLockPath) && fs.existsSync(podsFolderPath)) {
        console.log('Podfile.lock not found, running pod install...');
        execSync(`cd ${platformRoot} && pod install`);
        console.log('pod install completed');
      } else {
        console.log('Podfile.lock already exists or Pods folder not found');
      }
  } catch (e) {
      console.log("Error in after_prepare.js");
      console.log(e);
  }
};