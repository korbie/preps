var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Y\'all come back soon now, hear? This is my updated app.')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

