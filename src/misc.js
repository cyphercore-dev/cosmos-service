const http = require('./http')

function nodeInfo() {
  return http.get(`/node_info`)
}

module.exports = {
  nodeInfo,
}
