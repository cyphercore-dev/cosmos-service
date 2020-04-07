const http = require('./http')

function total(denomination = null) {
  if (denomination) {
    return http.get(`/supply/total/${denomination}`)
  }
  return http.get(`/supply/total`)
}

module.exports = {
  total,
}
