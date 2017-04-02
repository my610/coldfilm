'use strict';

const assert = require('assert');
const app = require('../../../../src/app');

describe('SeasonInfo service', function() {
  it('registered the SeasonInfo service', () => {
    assert.ok(app.service('SeasonInfo'));
  });
});
