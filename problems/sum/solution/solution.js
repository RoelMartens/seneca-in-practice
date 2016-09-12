var seneca = require('seneca')()

seneca.add({ role: 'math', cmd: 'sum' }, function (msg, respond) {
  var sum = parseInt(msg.left, 10) + parseInt(msg.right, 10)
  respond(null, {answer: sum})
})

module.exports = seneca
