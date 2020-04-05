const http = require('http')
const https = require('https')
const axios = require('axios')
const MAX_CONCURRENT = 5

const httpAgent = new http.Agent({
  keepAlive: true,
  maxSockets: MAX_CONCURRENT,
})
const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: MAX_CONCURRENT,
})

module.exports = axios.create({
  httpAgent,
  httpsAgent,
  baseURL: process.env.COSMOS_URL,
})
