var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Badescarf - Şal & Eşarp | Home' });
});

router.get('/sal', function(req, res, next) {
  res.render('sal', { title: 'Badescarf - Şal & Eşarp | Home' });
});

router.get('/esarp', function(req, res, next) {
  res.render('esarp', { title: 'Badescarf - Şal & Eşarp | Home' });
});

router.get('/hediyekutu', function(req, res, next) {
  res.render('hediyekutu', { title: 'Badescarf - Şal & Eşarp | Home' });
});

router.get('/aksesuar', function(req, res, next) {
  res.render('aksesuar', { title: 'Badescarf - Şal & Eşarp | Home' });
});

module.exports = router;
