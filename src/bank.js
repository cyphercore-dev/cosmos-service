const http = require('./http')

function balances(address) {
  return http.get(`/bank/balances/${address}`).then((res) => res.data.result)
}

module.exports = {
  balances,
}
