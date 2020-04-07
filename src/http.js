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

const client = axios.create({
  httpAgent,
  httpsAgent,
  baseURL: process.env.COSMOS_URL,
})

client.interceptors.response.use(
  function (response) {
    return response.data.result
  },
  function (error) {
    console.log(error)
    return {
      data: {
        result: null,
      },
    }
  }
)

module.exports = client
