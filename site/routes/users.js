var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.render('users/index', (err) => { title: 'Users'});
});

module.exports = router;
