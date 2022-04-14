var express = require('express'); 
const restaurant_controlers= require('../controllers/Restaurant'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', restaurant_controlers.restaurant_view_all_Page ); 
module.exports = router; 
