const express = require('express'),
    router = express.Router();

let data = [
  {model: "sal",resim: "img/product-img/product-1.jpg",fiyat:"79,90₺",bilgi:"İpek Twill-Mimosa Çiçek Desenli Mor"},
  {model: "sal",resim: "img/product-img/product-2.jpg",fiyat:"79,90₺",bilgi:"İpek Twill-Narcis Çiçek Desenli Mavi"},
  {model: "sal",resim: "img/product-img/product-3.jpg",fiyat:"79,90₺",bilgi:"İpek Twill-Lilyum Çiçek Desenli Pudra"},
  {model: "sal",resim: "img/product-img/product-4.jpg",fiyat:"94,90₺",bilgi:"İpek Twill-Rosa Çiçek Desenli Kiremit"},
  {model: "esarp",resim: "img/product-img/product-5.jpg",fiyat:"94,90₺",bilgi:"Hint Kaşmiri-Lacivert"},
  {model: "esarp",resim: "img/product-img/product-6.jpg",fiyat:"94,90₺",bilgi:"Hint Kaşmiri-Gri"},
  {model: "esarp",resim: "img/product-img/product-7.jpg",fiyat:"94,90₺",bilgi:"Alisya Pamuk-İndigo"},
  {model: "esarp",resim: "img/product-img/product-8.jpg",fiyat:"89,90₺",bilgi:"Alisya Pamuk-Bordo"},
  {model: "esarp",resim: "img/product-img/product-9.jpg",fiyat:"89,90₺",bilgi:"Alisya Pamuk-Gri"},
  {model: "hediyekutu",resim: "img/product-img/product-10.jpg",fiyat:"149,90₺",bilgi:"Bürümcük Bubble Mio-2'li Paket-İndigo-Gri"},
  {model: "hediyekutu",resim: "img/product-img/product-11.jpg",fiyat:"149,90₺",bilgi:"Bürümcük Bubble Mio-2'li Paket-Bordo-Nefti"},
  {model: "aksesuar",resim: "img/product-img/product-12.jpg",fiyat:"39,90₺",bilgi:"Bone-Pudra"},
];


/* GET Top-Pages. */
router.get('/', function(req, res) {
  res.render('index', { data: data });
});

router.get('/sal', function(req, res) {
  res.render('sal');
});

router.get('/esarp', function(req, res) {
  res.render('esarp');
});

router.get('/hediyekutu', function(req, res) {
  res.render('hediyekutu');
});

router.get('/aksesuar', function(req, res) {
  res.render('aksesuar');
});





module.exports = router;
