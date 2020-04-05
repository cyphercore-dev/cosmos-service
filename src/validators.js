const http = require('./http')

function get(stauts) {
  return http
    .get(`staking/validators?status=${stauts}`)
    .then((res) => res.data.result)
}

function delegations(address) {
  return http
    .get(`staking/validators/${address}/delegations`)
    .then((res) => res.data.result)
}

function unbounding(address) {
  return http
    .get(`staking/validators/${address}/unbounding_delegations`)
    .then((res) => res.data.result)
}

function distribution(address) {
  return http
    .get(`/distribution/validators/${address}`)
    .then((res) => res.data.result)
}

module.exports = {
  get,
  delegations,
  unbounding,
  unbounding,
  distribution
}
