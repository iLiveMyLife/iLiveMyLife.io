// @flow
const { app } = require('electron');
const { resolve } = require('path');

/**
 * Applications Configuration
 **/

module.exports = {
  APP_NAME: 'iLiveMyLive',
  APP_VERSION: app.getVersion(),
  APP_REMOTE_URL: 'http://192.168.0.12:3000/login',
  APP_DEV_URL: 'http://localhost:3000/login',
  APP_REMOTE_HOME_URL: 'http://192.168.0.12:3000',
  APP_DEV_HOME_URL: 'http://localhost:3000',

  GITHUB_URL: 'https://github.com/silarr/iLiveMyLife',
  GITHUB_URL_LICENSE: 'https://github.com/silarr/iLiveMyLife/blob/alpha/LICENSE',
  GITHUB_URL_ISSUES: 'https://github.com/silarr/iLiveMyLife/issues',

  WINDOW_DEFAULT_HEIGHT: 800,
  WINDOW_DEFAULT_WIDTH: 1300,
  WINDOW_MIN_HEIGHT: 500,
  WINDOW_MIN_WIDTH: 320,
  WINDOW_BG_COLOR: '#FAFAFA',

  ICON: resolve(__dirname, '../resources/icons/png/icon-512x512.png'),
};
