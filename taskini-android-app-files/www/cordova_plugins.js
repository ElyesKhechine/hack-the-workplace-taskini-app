cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-hot-code-push-plugin.chcp",
      "file": "plugins/cordova-hot-code-push-plugin/www/chcp.js",
      "pluginId": "cordova-hot-code-push-plugin",
      "clobbers": [
        "chcp"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "@appery/cordova-plugin-badge.Badge",
      "file": "plugins/@appery/cordova-plugin-badge/www/badge.js",
      "pluginId": "@appery/cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-local-notification.LocalNotification",
      "file": "plugins/@moodlehq/cordova-plugin-local-notification/www/local-notification.js",
      "pluginId": "@moodlehq/cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-sqlite-ext.SQLitePlugin",
      "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-ext",
      "clobbers": [
        "SQLitePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-hot-code-push-plugin": "1.6.10",
    "cordova-plugin-network-information": "3.0.0",
    "cordova-plugin-resource-generator": "0.1.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-device": "2.1.0",
    "@appery/cordova-plugin-badge": "0.8.10",
    "@moodlehq/cordova-plugin-local-notification": "0.9.1",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-splashscreen": "6.0.1",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-sqlite-ext": "6.0.0"
  };
});