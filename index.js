require('dotenv').config()
const staking = require('./src/staking')
const distribution = require('./src/distribution')
const auth = require('./src/auth')
const slashing = require('./src/slashing')

// async function main () {
//   let bonded = await staking.validators('bonded');
//   let unbonded = await staking.validators('unbonded');
//   let unbonding = await staking.validators('unbonding');
//   let all = [...bonded, ...unbonded, ...unbonding]
//   console.log(all.length);

//   console.log(all[0])
// }

async function test() {
  let bonded = await staking.validators('bonded')
  let validator = bonded[0]

  let delegations = await staking.delegations(validator.operator_address)
  let unbondingDelegations = await staking.unbondingDelegations(
    validator.operator_address
  )
  let distrib = await distribution.validator(validator.operator_address)
  let rewards = await distribution.rewards(validator.operator_address)
  let outstandingRewards = await distribution.outstandingRewards(validator.operator_address)

  let account = await auth.accounts(distrib.operator_address)
  let sign = await slashing.signingInfo(validator.consensus_pubkey)
  console.log(sign)
}

test()
