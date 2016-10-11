
require('fastclick').attach(document.body)
window.Promise = window.Promise || require('es6-promise')

module.exports = {
  core: require('./core/core'),
  store: require('./lib/store'),
  expstore: require('./lib/expstore').expstore
}

