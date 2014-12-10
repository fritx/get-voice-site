var express = require('express')
var getVoice = require('get-voice')
var app = module.exports = express()

app.get('/', function(req, res){
  var text = req.query['q'] || ''
  if (!text) return res.sendStatus(400)

  getVoice(text, function(e, buf){
    if (e) return res.sendStatus(500)
    res.type('audio/mp3').send(buf)
  })
})


if (!module.parent) {
  app.listen(3061)
}
