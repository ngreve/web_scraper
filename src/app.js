'use strict'
const config = require('./config')
const ScraperService = require('./services/ScraperService')
const NotificationService = require('./services/NotificationService')

let latestVersion = ''

async function run () {
  try {
    const version = await ScraperService.getKernelVersion()
    console.log(new Date().toString(), `Current Kernel Version: ${version}`)
    if (latestVersion.length === 0) {
      /* first start of the web scraper */
      latestVersion = version
    } else if (latestVersion !== version) {
      /* Kernel version changed. Send email to user. */
      latestVersion = version
      await NotificationService.sendKernelNotification(version)
    }
    /* Recall function after <config.interval> milliseconds */
    console.log('Next check: ', new Date(Date.now() + config.interval).toString())
    setTimeout(run, config.interval)
  } catch (err) {
    /* exit application if something went wrong */
    try {
      await NotificationService.sendErrorNotification(err)
    } catch (err) {
      console.error('Sending error notification failed!')
    }
    console.error(err)
    console.log('Program exit')
    process.exitCode = 1
  }
}

run()
