require('dotenv').config()
const staking = require('./src/staking');


async function main () {
  let bonded = await staking.validators('bonded');
  let unbonded = await staking.validators('unbonded');
  let unbonding = await staking.validators('unbonding');
  let all = [...bonded, ...unbonded, ...unbonding]
  console.log(all.length);

  console.log(all[0])
}

main();