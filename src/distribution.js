const http = require('./http')

function validator(address) {
  return http
    .get(`/distribution/validators/${address}`)
    .then((res) => res.data.result)
}

function rewards(address) {
  return http
    .get(`/distribution/validators/${address}/rewards`)
    .then((res) => res.data.result)
}

function outstandingRewards(address) {
  return http
    .get(`/distribution/validators/${address}/outstanding_rewards`)
    .then((res) => res.data.result)
}

module.exports = {
  validator,
  rewards,
  outstandingRewards,
}
