# What is this?
This is a simple web scraper based on Node.js. It checks if there is a new Linux
kernel version available. If it detects a new kernel version it sends an email
to the in config.js defined adress.  
For further information visit my [corrosponding blog article](https://nicogreve.com/projects/A%20Simple%20Web%20Scraper%20with%20E-Mail%20Notification?page=1&uuid=40340570-5152-11e9-8655-3402860f7f35)

# How to use it
To define rudamentary behavior you can change the parameter in the config.js file
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

For further configuration of the notification service just configure the
Nodemailer transporter
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


Start the application whith

```
$ npm run start
```
