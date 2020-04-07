const http = require('./http')

function accounts(address) {
  return http.get(`/auth/accounts/${address}`)
}

module.exports = {
  accounts,
}
