'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;


const myHook = options => { // always wrap in a function so you can pass options and for consistency.
  return hook => {
    // console.log('My custom hook ran');
    // console.dir(hook.params);

    const seasonInfo = hook.app.service('SeasonInfo');
    const data = hook.result;

    seasonInfo.get(1)
      .then(season => {
        console.log('>>', season.get({plain: true}), data)
        return Object.assign(hook.result, season.get({plain: true}));
      })
      .then((result) => {
        hook.result = result;
        return hook; // A good convention is to always return a promise.
      })
      .catch(error => {
        throw new Error('Опаньки!..');
      })

    // return Promise.resolve(hook)
  };
};

const myResult = options => { // always wrap in a function so you can pass options and for consistency.
  return hook => {
    console.log('>> myResult ----------------------');
    console.dir(hook.result);
    return Promise.resolve(hook)
  };
};

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [
    // hooks.disable('external'),

  ],
  get: [
    // hooks.disable('external')
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [
    hooks.remove('status')
  ],
  find: [
    // myHook(), myResult()
  ],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
