const express = require('express'),
      router = express.Router();

/* GET users listing. */
router.get('/signin', function(req, res) {
  res.render('kaydol/signin');
});

router.post('/signin', function(req, res) {

});

router.get('/signup', function(req, res) {
  res.render('kaydol/signup');
});

router.post('/signup', function(req, res) {

});


router.get('/admin', function(req, res) {
  res.render('kaydol/admin');
});

router.post('/admin', function(req, res) {

});

module.exports = router;