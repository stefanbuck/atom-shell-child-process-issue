'use strict';

var app = require('app');
var path = require('path');
var forkFile;

app.on('ready', function() {

  forkFile = 'fork_compare.js';
  // forkFile = 'fork_glob.js';

  require('child_process').fork(path.join(__dirname, forkFile));
});
