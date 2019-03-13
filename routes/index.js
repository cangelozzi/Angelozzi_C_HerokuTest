var express = require('express');
var router = express.Router();

//!Require data.js
const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: "This is an Express App!" });
});

/* GET user page. */
router.get('/:user', function(req, res, next) {
  console.log('data: ', data);
  console.log('user: ', req.params.user);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
