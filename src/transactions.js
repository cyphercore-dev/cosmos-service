const http = require('./http')

function txs(hash) {
  return http.get(`/txs/${hash}`)
}

module.exports = {
  txs,
}
