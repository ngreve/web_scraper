# What is this?
This is a simple web scraper, written as a Node.js application. It checks if there is a new Linux
kernel version available. If it detects a new kernel version it sends an email
to the in the config.js defined address.  
For further information visit my [corresponding blog article](https://www.nicogreve.com/a-simple-web-scaper-with-email-notification/)

# How to use it
Change the parameter in the config.js file to your needs:
```
module.exports = {
  uri: 'https://www.kernel.org',
  email: {
    user: 'your_login_user',
    pass: 'your_password'
  },
  interval: 5 * 1000 * 60 // in milliseconds
}
```

For further configuration of the notification service, configure the
Nodemailer transporter:
```
// src/services/NotificationService.js

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

. . .

```


Start the application with:

```
$ npm run start
```
