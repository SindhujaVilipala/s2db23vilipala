var express = require('express'); 
const restaurant_controlers= require('../controllers/Restaurant'); 
var router = express.Router(); 
 
/* GET restaurant */ 
//router.get('/', restaurant_controlers.restaurant_view_all_Page ); 
//module.exports = router; 
// GET request for one restaurant. 
//router.get('/Restaurant/:id', restaurant_controlers.restaurant_detail); 

//module.exports=router;
/* GET detail restaurant page */ 
//router.get('/detail', restaurant_controlers.restaurant_view_one_Page); 

/* GET create restaurant page */ 
router.get('/create', restaurant_controlers.restaurant_create_Page); 
module.exports= router;
