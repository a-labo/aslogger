/**
 * 
 * @module aslogger
 */

'use strict'

const create = require('./create')
const AsLogger = require('./aslogger')

let lib = create.bind(this)

Object.assign(lib, AsLogger, {
  create,
  AsLogger
})

module.exports = lib
