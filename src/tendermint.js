const http = require('./http')

function syncing() {
  return http.get(`/syncing`).then((res) => res.data.result)
}

function blocks(height = 'latest') {
  return http.get(`/blocks/${height}`).then((res) => res.data.result)
}


function validatorsets(height = 'latest') {
  return http.get(`/validatorsets/${height}`).then((res) => res.data.result)
}

module.exports = {
  accounts,
  validatorsets,
  blocks,
}
