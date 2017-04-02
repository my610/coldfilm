'use strict';

const service = require('feathers-sequelize');
const FilmTranslated = require('./FilmTranslated-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: FilmTranslated(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/FilmTranslated', service(options));

  // Get our initialize service to that we can bind hooks
  const FilmTranslatedService = app.service('/FilmTranslated');

  // Set up our before hooks
  FilmTranslatedService.before(hooks.before);

  // Set up our after hooks
  FilmTranslatedService.after(hooks.after);
};
