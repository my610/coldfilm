'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

const path = require('path');


module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.use(notFound());
  app.use(logger(app));
  app.use(handler({
    html: {
      401: path.join(app.get('public'), '401.html'),
      404: path.join(app.get('public'), '404.html'),
      default: path.join(app.get('public'), 'default.html')
    },
    json: function(error, req, res, next) {
      // render your error view with the error object

      let output = error.toJSON();

      if (process.env.NODE_ENV === 'production') {
        delete output.stack;
        delete output.errors;
        delete output.className;
      }

      res.set('Content-Type', 'application/json');
      res.json(output);
    }
  }));
};
