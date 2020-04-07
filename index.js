require('dotenv').config()

const auth = require('./src/auth')
const bank = require('./src/bank')
const distribution = require('./src/distribution')
const governance = require('./src/governance')
const mint = require('./src/mint')
const misc = require('./src/misc')
const slashing = require('./src/slashing')
const staking = require('./src/staking')
const supply = require('./src/supply')
const tendermint = require('./src/tendermint')
const transactions = require('./src/transactions')

module.exports = {
  auth,
  bank,
  distribution,
  governance,
  mint,
  misc,
  slashing,
  staking,
  supply,
  tendermint,
  transactions,
}
