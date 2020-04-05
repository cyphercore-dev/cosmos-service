require('dotenv').config()
const staking = require('./src/staking')
const distribution = require('./src/distribution')
const auth = require('./src/auth')
const slashing = require('./src/slashing')
const fs = require('fs')

async function main() {
  let bonded = await staking.validators('bonded')
  let unbonded = await staking.validators('unbonded')
  let unbonding = await staking.validators('unbonding')
  let all = [...bonded, ...unbonded, ...unbonding]

  // Non parallel
  // for (let v of all) {
  //   v = await test(v)
  // }
  // Parallel
  const tasks = all.map(test)
  all = await Promise.all(tasks)

  fs.writeFile('validators2', JSON.stringify(all), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
}

async function test(validator) {
  validator.delegations = await staking.delegations(validator.operator_address)
  validator.unbonding_delegations = await staking.unbondingDelegations(
    validator.operator_address
  )
  validator.distribution = await distribution.validator(
    validator.operator_address
  )
  validator.rewards = await distribution.rewards(validator.operator_address)
  validator.outstanding_rewards = await distribution.outstandingRewards(
    validator.operator_address
  )

  validator.account = null

  if (validator.distribution) {
    validator.account = await auth.accounts(
      validator.distribution.operator_address
    )
  }

  validator.signing_info = await slashing.signingInfo(
    validator.consensus_pubkey
  )
  return validator
}

main()
