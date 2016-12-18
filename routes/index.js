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

router.get('/cocktail', function(req, res, next) {
  res.render('pages/cocktail', { title: 'Blenderkit' });
});

var sample = {app_title: ''};
router.get('/cocktail/:app_title', function(req, res) {
  sample.app_title = req.params.app_title;
  res.render('pages/cocktail', { title: 'Blenderkit', app_title: sample.app_title });
});

// exports.geturl = function(url){
//   router.get('/cocktail/' + url, function(req, res, next) {
//     res.render('pages/cocktail', { title: 'Blenderkit' });
//   });
// };

module.exports = router;
