const path = require('path');

module.exports = (config) => {
  const configuration = {
    basePath: process.cwd(),
    frameworks: [
      'mocha',
      'chai',
    ],
    reporters: [
      'mocha',
    ],
    files: [
      'dist/*.js',
      path.resolve(__dirname, 'inject.js'),
      'spec/*.js',
      'spec/**/*.js',
    ],
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    logLevel: config.LOG_WARN,
    singleRun: true,
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['ChromeHeadlessNoSandbox'];
  }

  config.set(configuration);
};
