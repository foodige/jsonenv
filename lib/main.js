'use strict';
var fs = require('fs');
var jsonfile = require('jsonfile');
var util = require('util');

module.exports = {
	load: function (options) {
    var jsonEnv;
    var fileContent;
    var envFile;
    var silent;

    options = options || {};
    envFile = options.envFile || '.jsonenv';
    silent = options.silent || false;
    var myObj = {k : 2};

    try {
      jsonEnv = jsonfile.readFileSync(envFile);

      if (options.callback && callback) {
        callback(null, jsonEnv);
      }
      else {
        var objectToPopulate;
        if (options.namespace) {
          process.env[namespace] = {};
          objectToPopulate = process.env[namespace];
        } else {
          objectToPopulate = process.env;
        }

        Object.keys(jsonEnv).forEach(function(key) {
          process.env[key] = jsonEnv[key];
          //console.log(process.env[key], myObj[key]);
        });

        console.log(process.env);
        return true;
      }
    }
    catch (err) {
      if (options.callback && callback) {
        callback(err);
      } else {
        if (!silent) {
          console.log(err);
        }
        return false;
      }
    }
	}
};

console.log(module.exports.load());
console.log();
module.exports.load = module.exports.load;