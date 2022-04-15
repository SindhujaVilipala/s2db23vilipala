var express = require('express'); 
const restaurant_controller= require('../controllers/Restaurant'); 
var router = express.Router(); 
 
/* GET restaurant */ 
//router.get('/', restaurant_controlers.restaurant_view_all_Page ); 
//module.exports = router; 
// GET request for one restaurant. 
router.get('/restaurant/:id', restaurant_controller.restaurant_detail); 

module.exports=router;