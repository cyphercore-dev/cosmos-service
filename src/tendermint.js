const http = require('./http')

function syncing() {
  return http.get(`/syncing`)
}

function blocks(height = 'latest') {
  return http.get(`/blocks/${height}`)
}

function validatorsets(height = 'latest') {
  return http.get(`/validatorsets/${height}`)
}

module.exports = {
  accounts,
  validatorsets,
  blocks,
}
