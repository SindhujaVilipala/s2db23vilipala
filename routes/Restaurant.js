var express = require('express');
var router = express.Router();
const restaurant_controlers= require('../controllers/restaurant');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET restaurant */
router.get('/', restaurant_controlers.restaurant_view_all_Page );


// GET request for one costume. 
router.get('/restaurant/:id', restaurant_controlers.restaurant_detail); 

/* GET detail restaurant page */ 
router.get('/detail', restaurant_controlers.restaurant_view_one_Page); 

/* GET create restaurant page */ 
router.get('/create', restaurant_controlers.restaurant_create_Page); 

/* GET create update page */ 
router.get('/update', restaurant_controlers.restaurant_update_Page); 

// /* GET delete restaurant page */ 
 router.get('/delete', restaurant_controlers.restaurant_delete_Page);
 module.exports = router;