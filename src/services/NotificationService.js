'use strict'
const config = require('../config')
const sendmail = require('sendmail')({ silent: true })

module.exports = {
  sendKernelNotification (version) {
    return new Promise((resolve, reject) => {
      const mail = Object.assign({}, config.emailOptions, {
        subject: `Web_Scraper: Kernel ${version} available!`,
        html: `Kernel ${version} available!<br>${config.uri}<br>Mail sent from web_scraper`
      })
      sendmail(mail, function (err, reply) {
        if (err) reject(err)
        resolve(reply)
      })
    })
  },
  sendErrorNotification (err) {
    return new Promise((resolve, reject) => {
      const mail = Object.assign({}, config.emailOptions, {
        subject: `Web_Scraper: An error occured!`,
        html: `Error message:<br><br>${err}`
      })
      sendmail(mail, function (err, reply) {
        if (err) reject(err)
        resolve(reply)
      })
    })
  }
}
