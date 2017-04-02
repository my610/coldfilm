'use strict';

const service = require('feathers-sequelize');
const SeasonInfo = require('./SeasonInfo-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: SeasonInfo(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/SeasonInfo', service(options));

  // Get our initialize service to that we can bind hooks
  const SeasonInfoService = app.service('/SeasonInfo');

  // Set up our before hooks
  SeasonInfoService.before(hooks.before);

  // Set up our after hooks
  SeasonInfoService.after(hooks.after);
};
