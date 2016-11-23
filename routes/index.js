var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blenderkit' });
});

/* make route to blend page */
router.get('/blend', function(req, res, next) {
  res.render('blend', { title: 'Blenderkit' });
});

module.exports = router;
