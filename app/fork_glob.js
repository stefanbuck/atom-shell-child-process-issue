'use strict';

var path = require('path');
var glob = require('glob');
var globPath;

console.log('------ Test glob #1 ------');
globPath = __dirname;
console.log('Running glob with arg', globPath);
console.log((glob.sync(globPath).length === 1) ? 'Passed' : 'Failed');

console.log('------ Test glob #2 ------');
globPath = path.join(__dirname, '*');
console.log('Running glob with arg', globPath);
console.log((glob.sync(globPath).length > 1) ? 'Passed' : 'Failed');
