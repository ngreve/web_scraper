# What is this?
This is a simple web scraper based on Node.js. It checks if there is a new Linux
kernel version available. If it detects a new kernel version it sends an email
to the in config.js defined adress.  
For further information visit my [corrosponding blog article](http://stackoverflow.com)

# How to use it
To define rudamentary behavior you can change the parameter in the config.js faile
```
module.exports = {
  uri: 'https://www.kernel.org', // set the target page
  emailOptions: {
    to: 'your_email@email.com', // who gets a notification
    from: 'web_scraper@web_scraper.org', // who should be displayed as the sender of the email
    replyTo: 'web_scraper@web_scraper.org'
  },
  interval: 5 * 1000 * 60 // change the interval in which the target page is checked
}

```

Start the application whith

```
$ npm run start
```
