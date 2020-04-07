const http = require('./http')

function signingInfos(limit = 500) {
  return http.get(`/slashing/signing_infos?limit=${limit}`)
}

// Might be removed in newer APIs
function signingInfo(publicKey) {
  return http.get(`slashing/validators/${publicKey}/signing_info`)
}

module.exports = {
  signingInfos,
  signingInfo,
}
