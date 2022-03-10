const express    = require('express'),
      User       =require('../models/userModel'),
      passport   =require('passport'),
      router     = express.Router();

let adminActions = [
    {
        actionId:1,
        actionName:"changeSlide1Image",
        displayName:"Slayt 1-Değiştir",
    },
    {
        actionId:2,
        actionName:"changeSlide2Image",
        displayName:"Slayt 2-Değiştir",
    },
    {
        actionId:3,
        actionName:"category1Image",
        displayName:"Kategori-1 Değiştir",
    },
    {
        actionId:4,
        actionName:"category2Image",
        displayName:"Kategori-2 Değiştir",
    },
    {
        actionId:5,
        actionName:"changeOfferImage",
        displayName:"Teklif Ürünü Değiştir",
    },
    {
        actionId:6,
        actionName:"ÜrünEkle",
        displayName:"Yeni Ürün Ekle",
    }
];




/* GET users listing. */
router.get('/signin', function(req, res) {
    res.render('admin/signin');
});

router.post('/signin', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/signin'
    }),(req,res)=>{});

router.get('/signup', function(req, res) {
    res.render('admin/signup');
});

router.post('/signup', function(req, res) {

    let newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            res.redirect('/signup');
        }
        passport.authenticate('local')(req,res, ()=>{
           res.redirect('/');
        });
    })
});

router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
});


router.get('/admin', function(req, res) {
    res.render('admin/admin',{adminActions:adminActions});
});

router.post('/admin', function(req, res) {

});

 module.exports = router;