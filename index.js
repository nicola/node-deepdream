var debug = require('debug')('deepdream:error')

function deepdream (opts) {
  opts = opts || {}
  this.net = opts.net
  this.img = opts.img
  this.iter = opts.iter || 10
  this.octave = opts.octave || 4
  this.step = opts.step || 1.5
  this.octaveScale = this.octaveScale || 1.4
  this.jitter = opts.jitter || 32
  this.end = opts.end || 'inception_4c/output'
  this.clip = clip || true
}
debug('Work in progress')

