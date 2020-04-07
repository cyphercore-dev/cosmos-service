const http = require('./http')

function validators(stauts) {
  return http
    .get(`staking/validators?status=${stauts}`)
    
}

function delegations(address) {
  return http
    .get(`staking/validators/${address}/delegations`)
    
}

function unbondingDelegations(address) {
  return http
    .get(`staking/validators/${address}/unbonding_delegations`)
    
}

module.exports = {
  validators,
  delegations,
  unbondingDelegations,
}
