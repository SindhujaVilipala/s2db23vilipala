var Restaurant = require('../models/Restaurant'); 
 
// List of all Restaurant
exports.restaurant_list = async function(req, res) {
    //List of all Restaurant
    res.send('Not IMPLEMENTED:Restaurant list');
};
exports.restaurant_list = async function(req, res) { 
    
    try{ 
        theRestaurant = await Restaurant.find(); 
        res.send(theRestaurant); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
// for a specific Restaurant. 
exports.restaurant_detail =  async function(req, res) { 
   console.log("detail" +req.params.id)
   try{
       result = await Restaurant.findById(req.params.id)
       res.send(result)
   }
   catch(error){
       res.status(500)
       res.send(`{"error":document for id ${req.params.id} not found`);}

   };

 
// Handle restaurant create on POST. 
exports.restaurant_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Restaurant(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Itemname":"roti", "Quantity":12, "Price":"Three USD"} 
    document.Itemname = req.body.Itemname; 
    document.Quantity = req.body.Quantity; 
    document.Price = req.body.Price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        console.log(err)
        res.send({"name":err.name,"message":err.message})
        res.send(err)
        res.status(500); 
       // res.error(500`{"error": ${err}}`); 
    }   
}; 
 
// Handle restaurant delete on DELETE.
exports.restaurant_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Restaurant.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
}; 
 
//Handle Restaurant update form on PUT.
exports.restaurant_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Restaurant.findById( req.params.id)
        // Do updates of properties
        if(req.body.Itemname) toUpdate.Itemname = req.body.Itemname;
        if(req.body.Quantity) toUpdate.Color = req.body.Quantity;
        if(req.body.Price) toUpdate.Price = req.body.Price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

}; 
// VIEWS 
// Handle a show all view 
exports.restaurant_view_all_Page = async function(req, res) { 
    try{ 
        theRestaurant = await Restaurant.find(); 
        res.render('restaurant', { title: 'Restaurant Search Results', results: theRestaurant }); 
    } 
    catch(err){ 
        res.error(500,`{"error":${err}}`);
        res.status(500); 
        
    }   
};

// Handle a show one view with id specified by query 
exports.restaurant_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Restaurant.findById( req.query.id) 
        res.render('restaurantdetail',  
{ title: 'Restaurant Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a restaurant. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.restaurant_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('restaurantcreate', { title: 'restaurant Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 