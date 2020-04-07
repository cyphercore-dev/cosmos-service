const http = require('./http')

function balances(address) {
  return http.get(`/bank/balances/${address}`)
}

module.exports = {
  balances,
}
