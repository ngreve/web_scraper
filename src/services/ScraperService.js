'use strict'
const config = require('../config')
const cheerio = require('cheerio')
const rp = require('request-promise')

module.exports = {
  async getKernelVersion () {
    const response = await rp({
      uri: config.uri
    })
    const $ = cheerio.load(response)
    const kernelVersion = $('#latest_link').text().trim()
    if (kernelVersion === '') throw new Error('Kernel version not found')
    return kernelVersion
  }
}
