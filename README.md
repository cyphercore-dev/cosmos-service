# cosmos-service

This library is a low level interface to Cosmos Hub API in JavaScript. It is a minimum wrapper over REST, and provides mechanism to define custom error handler, and maximum number of concurrent connections. It is suitable for getting large amounts of data from Blockchain.

## Installation

```
npm i git+https://github.com/cyphercore-dev/cosmos-service.git
```

## Usage

Create `.env` file in your project root.

```
COSMOS_URL=YOUR-COSMOS-HUB-NODE
```


## Examples

Get detailed info of a validator

```javascript
const cosmos = require('cosmos-service')

let bonded = await cosmos.staking.validators('bonded')
let validator = bonded[0]

validator.delegations = await cosmos.staking.delegations()
validator.unbonding_delegations = await cosmos.staking.unbondingDelegations(
  validator.operator_address
)
validator.distribution = await cosmos.distribution.validator(
  validator.operator_address
)
validator.rewards = await cosmos.distribution.rewards(validator.operator_address)
validator.outstanding_rewards = await cosmos.distribution.outstandingRewards(
  validator.operator_address
)

validator.account = null

if (validator.distribution) {
  validator.account = await cosmos.auth.accounts(
    validator.distribution.operator_address
  )
}

validator.signing_info = await cosmos.slashing.signingInfo(
  validator.consensus_pubkey
)

```
