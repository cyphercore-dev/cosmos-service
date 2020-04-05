require('dotenv').config()
const validators = require('./src/validators');


async function main () {
  let bonded = await validators.get('bonded');
  let unbonded = await validators.get('unbonded');
  let unbonding = await validators.get('unbonding');
  let all = [...bonded, ...unbonded, ...unbonding]
  console.log(all.length);

  console.log(all[0])
}

main();