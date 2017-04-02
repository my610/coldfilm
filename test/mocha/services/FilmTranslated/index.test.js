'use strict';

const assert = require('assert');
const app = require('../../../../src/app');

describe('FilmTranslated service', function() {
  it('registered the FilmTranslated service', () => {
    assert.ok(app.service('FilmTranslated'));
  });
});
