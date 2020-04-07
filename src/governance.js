const http = require('./http')

function proposals(id) {
  return http.get(`/gov/proposals/${id}`).then((res) => res.data.result)
}

function proposer(id) {
  return http.get(`/gov/proposals/${id}/proposer`).then((res) => res.data.result)
}

function deposits(id) {
  return http.get(`/gov/proposals/${id}/deposits`).then((res) => res.data.result)
}

module.exports = {
  proposals,
  proposer,
  deposits
}
