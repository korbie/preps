var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Y\'all come back soon now, hear?')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

