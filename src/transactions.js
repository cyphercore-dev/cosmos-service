const http = require('./http')

function txs(hash) {
  return http.get(`/txs/${hash}`).then((res) => res.data.result)
}

module.exports = {
  txs,
}
