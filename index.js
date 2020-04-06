require('dotenv').config()

const staking = require('./src/staking')
const distribution = require('./src/distribution')
const auth = require('./src/auth')
const slashing = require('./src/slashing')

module.exports = {
  staking,
  distribution,
  auth,
  slashing,
}
