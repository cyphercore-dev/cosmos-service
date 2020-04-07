const http = require('./http')

function validator(address) {
  return http.get(`/distribution/validators/${address}`)
}

function rewards(address) {
  return http.get(`/distribution/validators/${address}/rewards`)
}

function outstandingRewards(address) {
  return http.get(`/distribution/validators/${address}/outstanding_rewards`)
}

module.exports = {
  validator,
  rewards,
  outstandingRewards,
}
