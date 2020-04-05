const http = require('./http')

function signingInfor(limit = 500) {
  return http
    .get(`/slashing/signing_infos?limit=${limit}`)
    .then((res) => res.data.result)
}

module.exports = {
  accounts,
}
