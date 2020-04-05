const http = require('./http')

function validators(stauts) {
  return http
    .get(`staking/validators?status=${stauts}`)
    .then((res) => res.data.result)
}

function delegations(address) {
  return http
    .get(`staking/validators/${address}/delegations`)
    .then((res) => res.data.result)
}

function unbondingDelegations(address) {
  return http
    .get(`staking/validators/${address}/unbonding_delegations`)
    .then((res) => res.data.result)
}

module.exports = {
  validators,
  delegations,
  unbondingDelegations,
}
