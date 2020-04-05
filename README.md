# cosmos-service

This library is a low level interface to Cosmos Hub API in JavaScript. It is a minimum wrapper over REST, and provides mechanism to define custom error handler, and maximum number of concurrent connections. It is suitable for getting large amounts of data from Blockchain.

## Examples

Get detailed info of a validator

```javascript
let bonded = await staking.validators('bonded')
let validator = bonded[0]

validator.delegations = await staking.delegations()
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

```
