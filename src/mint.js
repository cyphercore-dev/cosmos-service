const http = require('./http')

function parameters() {
  return http.get(`/minting/parameters`)
}

function inflation() {
  return http.get(`/minting/inflation`)
}

function provisions() {
  return http.get(`/minting/annual-provisions`)
}

module.exports = {
  parameters,
  inflation,
  provisions,
}
