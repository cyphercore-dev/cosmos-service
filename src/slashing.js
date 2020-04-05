const http = require('./http')

function signingInfos(limit = 500) {
  return http
    .get(`/slashing/signing_infos?limit=${limit}`)
    .then((res) => res.data.result)
}

// Might be removed in newer APIs
function signingInfo(publicKey) {
  return http
    .get(`slashing/validators/${publicKey}/signing_info`)
    .then((res) => res.data.result)
}

module.exports = {
  signingInfos,
  signingInfo,
}
