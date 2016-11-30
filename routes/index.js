var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Blenderkit' });
});

/* make route to blend page */
router.get('/blend', function(req, res, next) {
  res.render('pages/blend', { title: 'Blenderkit' });
});

/* make route to blended-list page */
router.get('/blended/list', function(req, res, next) {
  res.render('pages/blended-list', { title: 'Blenderkit' });
});

module.exports = router;
