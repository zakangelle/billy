var Application = module.exports = require('./lib/Application.js');

// in case we ref it the old way ( ... ಠ_ಠ )
Application.Application = Application;

// Expose config object for ref / testing
module.exports.ConfigStore = require('./lib/ConfigStore.js');
