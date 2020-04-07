const cosmos = require('..');


let main = async () => {
  let result = await cosmos.staking.validators('bonded');

  console.log(result)
}

main();