//to use debug option run `DEBUG=true followed by your .conf.js`
const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;
exports.config = {
  runner: 'local',
  specs: [
    './test/specs/goibibo.test.js'
  ],
  exclude: [
  ],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // args: ['--headless', '--disable-gpu'],
      }
    },
  ],
  sync: true,
  logLevel: 'silent',
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3,          // Default request retries count
  services: ['selenium-standalone'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000,
    compilers: ['js:@babel/register'],
  },
  reporters: [
    'spec'
  ],
  onPrepare: function (config, capabilities) {
    console.log('**** let\'s go ****');
  },
  beforeSession: function (config, capabilities, specs) {
    require('@babel/register');
  },
  before: function (capabilities, specs) {
    const chai = require('chai');
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
  afterTest: function (test) {
    //console.log(test);
  },
  onComplete: function (exitCode) {
    console.log('**** that\'s it ****');
  },
  afterTest: function (test) {
    browser.takeScreenshot();
  }
}