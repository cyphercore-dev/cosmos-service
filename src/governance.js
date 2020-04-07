const http = require('./http')

function proposals(id) {
  return http.get(`/gov/proposals/${id}`)
}

function proposer(id) {
  return http.get(`/gov/proposals/${id}/proposer`)
}

function deposits(id, depositor = null) {
  if (depositor) {
    return http.get(`/gov/proposals/${id}/deposits/${depositor}`)
  }
  return http.get(`/gov/proposals/${id}/deposits`)
}

function votes(id, voter = null) {
  if (voter) {
    return http.get(`/gov/proposals/${id}/votes/voter`)
  }
  return http.get(`/gov/proposals/${id}/votes`)
}

function tally(id) {
  return http.get(`/gov/proposals/${id}/tally`)
}

function deposit() {
  return http.get(`/gov/parameters/deposit`)
}

function tallying() {
  return http.get(`/gov/parameters/tallying`)
}

function voting() {
  return http.get(`/gov/parameters/voting`)
}

module.exports = {
  proposals,
  proposer,
  deposits,
  votes,
  tally,
  deposit,
  tallying,
  voting,
}
