'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [
    // hooks.disable('external')
  ],
  create: [
    hooks.disable('external')
  ],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [
    // hooks.remove('status')
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
