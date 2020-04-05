const http = require('./http')

function accounts(address) {
  return http.get(`/auth/accounts/${address}`).then((res) => res.data.result)
}

module.exports = {
  accounts,
}
