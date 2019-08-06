'use strict'

const config = require('../config')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.org',
  port: 587,
  secure: false,
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
})

module.exports = {
  async sendKernelNotification (version) {
    await transporter.sendMail({
      from: '"Your Name" <your@email.com>',
      to: 'your@email.com',
      subject: `Web_Scraper: Kernel ${version} available!`,
      text: `Kernel ${version} available!\n${config.uri}\nMail sent from web_scraper`
    })
  },
  async sendErrorNotification (err) {
    await transporter.sendMail({
      from: '"Your Name" <your@email.com>',
      to: 'your@email.com',
      subject: `Web_Scraper: An error occured!`,
      text: `Error message:\n\n${err}`
    })
  }
}
