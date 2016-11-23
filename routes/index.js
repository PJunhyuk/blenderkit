var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Blenderkit' });
});

/* make route to memo page */
router.get('/memo', function(req, res, next) {
  res.render('pages/memo', { title: 'Blenderkit' });
});

module.exports = router;
