/**
 * Test case for aslogger.
 * Runs with mocha.
 */
'use strict'

const AsLogger = require('../lib/aslogger.js')
const assert = require('assert')

describe('aslogger', function () {
  this.timeout(3000)

  it('AsLogger', () => {
    let logger = new AsLogger({
      PREFIX: '[test] '
    })
    assert.ok(logger)
    logger.notice('This is notice')
    logger.info('This is notice')
  })
})

/* global describe, before, after, it */
