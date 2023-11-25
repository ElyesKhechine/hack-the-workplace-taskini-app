const fs = require('fs');
const path = require('path');

module.exports = function(context) {
    try {
        const filePath = path.join(context.opts.projectRoot, "platforms", "ios", "Podfile.lock");
        console.log("Removing " + filePath);
        fs.rmSync(filePath, {force: true});
    } catch (e) {
        console.log("Error in before_plugin_install.js");
        console.log(e);
    }
}