const http = require('./http')

function proposals(id) {
  return http.get(`/gov/proposals/${id}`)
}

function proposer(id) {
  return http.get(`/gov/proposals/${id}/proposer`)
}

function deposits(id, depositor = null) {
  if(depositor) {
    return http.get(`/gov/proposals/${id}/deposits/${depositor}`)  
  }
  return http.get(`/gov/proposals/${id}/deposits`)
}

module.exports = {
  proposals,
  proposer,
  deposits
}
