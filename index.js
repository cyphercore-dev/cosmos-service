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

  validator.delegations = await staking.delegations(validator.operator_address)
  validator.unbonding_delegations = await staking.unbondingDelegations(
    validator.operator_address
  )
  validator.distribution = await distribution.validator(validator.operator_address)
  validator.rewards = await distribution.rewards(validator.operator_address)
  validator.outstanding_rewards = await distribution.outstandingRewards(validator.operator_address)

  validator.account = await auth.accounts(validator.distribution.operator_address)
  validator.signing_info = await slashing.signingInfo(validator.consensus_pubkey)
  console.log(validator)
}

test()
