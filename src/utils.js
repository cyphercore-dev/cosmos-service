function calculateSelfBond(validator) {
  validator.self_bond_total = 0
  if (validator.delegations) {
    for (delegation of validator.delegations) {
      if (
        delegation.delegator_address === validator.distribution.operator_address
      ) {
        validator.self_bond_total += Number(delegation.shares)
      }
    }
  }
}

function calculateUnbonding(validator) {
  validator.unbonding_total = 0
  if (validator.unbonding_delegations) {
    for (delegation of validator.unbonding_delegations) {
      for (entry of delegation.entries) {
        validator.unbonding_total += parseInt(entry.balance, 10)
      }
    }
  }
}

module.export = {
  calculateSelfBond,
  calculateUnbonding,
}
