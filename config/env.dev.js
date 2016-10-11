var merge = require('webpack-merge')
var prodEnv = require('./env.test')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true
})
