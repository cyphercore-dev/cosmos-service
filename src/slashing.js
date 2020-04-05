const http = require('./http')

function signingInfos(limit = 500) {
  return http
    .get(`/slashing/signing_infos?limit=${limit}`)
    .then((res) => res.data.result)
}

module.exports = {
  signingInfos,
}
