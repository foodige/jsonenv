'use strict';
var fs = require('fs');
var jsonfile = require('jsonfile');

module.exports = {
  load: function (options) {
    var jsonEnv;
    var envFile;
    var silent;

    options = options || {};
    silent = options.silent;
    if (silent === undefined) {
      silent = true;
    }
    envFile = options.file || '.jsonenv';

    try {
      jsonEnv = jsonfile.readFileSync(envFile);
      return jsonEnv;
    }
    catch (err) {
      if (!silent) {
        throw err;
      }
      else {
        return false;
      }
    }
  }
};
module.exports.load = module.exports.load;
