var express = require('express'),
  app = express(),
  logic = require('./logic');

app.get('/:operator/:num1/:num2', function(req, res) {
  // res.send(req.params.num1);
  var num1 = Number(req.params.num1);
  var num2 = Number(req.params.num2);
  var operator = req.params.operator;
  var ans = logic.calculator(operator, num1, num2);
  res.sendStatus(ans);
});

app.listen(1337, function() {
  console.log("Starting a server on localhost:1337");
});