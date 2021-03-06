/* eslint-disable */
if (typeof global !== 'undefined') {
  // Node.js injections for Mocha tests
  global.chai = require('chai');
  global.noflo = require('noflo');
  global.baseDir = process.cwd();
} else {
  // Browser injections for Mocha tests
  window.noflo = require('noflo');
  window.baseDir = 'browser';
}
