const fs = require('fs');
const os = require('os');
const path = require('path');

module.exports = {
  saveFiles: saveFiles,
  restoreFiles: restoreFiles,
};

function saveFiles(srcDir, fileExtension, destDir) {
  if (destDir == null) {
    destDir = fs.mkdtempSync(path.join(os.tmpdir(), "cordova-res"));
    console.log("Temporary directory is " + destDir);
  }

  if (fs.existsSync(srcDir)) {
    console.log("Saving " + fileExtension + " files from " + srcDir + " directory to " + destDir);

    var targetDir = path.join(destDir, srcDir);
    if (! fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, {recursive: true});
    }

    var files = fs.readdirSync(srcDir);
    files.forEach(function (file) {
        var srcFile = path.join(srcDir, file);
        var destFile = path.join(targetDir, file);
        fs.copyFileSync(srcFile, destFile);
      });
  }

  return destDir;
}

function restoreFiles(srcDir, destDir, fileExtension) {
  if (fs.existsSync(path.join(srcDir, destDir))) {
    console.log("Restoring " + fileExtension + " files from " + srcDir + " directory to " + destDir);

    var files = fs.readdirSync(path.join(srcDir, destDir));
      files.forEach(function (file) {
          var srcFile = path.join(srcDir, destDir, file);
          var destFile = path.join(destDir, file);
          fs.copyFileSync(srcFile, destFile);
        });
  }
}
