var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var restaurant_controller = require('../controllers/Restaurant'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Restaurant ROUTES /// 
 
// POST request for creating a Restaurant.  
router.post('/Restaurant', restaurant_controller.restaurant_create_post); 
 
// DELETE request to delete Restaurant. 
router.delete('/Restaurant/:id', restaurant_controller.restaurant_delete); 
 
// PUT request to update Restaurant. 
router.put('/Restaurnt/:id', restaurant_controller.restaurant_update_put); 
 
// GET request for one Restaurant. 
router.get('/restaurant/:id', restaurant_controller.restaurant_detail); 
 
// GET request for list of all Restaurant items. 
router.get('/Restaurant', restaurant_controller.restaurant_list); 
 
module.exports = router;