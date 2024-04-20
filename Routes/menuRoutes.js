const express= require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
router.post('/menu', async (req, res) => {
    try {
    const menuItemData = req.body; // Assuming the request
   
    // Create a new menu item using the Mongoose model
    const menuItem = new MenuItem(menuItemData);
    // Save the new menu item to the database
    const menu_data = await menuItem.save();
    console.log('Menu item saved');
    res.status(201).json(menu_data);
    } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });

router.get('/menu', async (req, res) => {
    try {
    // Use the Mongoose model to find all menu items in the
    //database
    const menuItems = await MenuItem.find();
    // Send the list of menu items as a JSON respons
    res.json(menuItems);
} catch (error) {
console.error('Error fetching menu items:', error);
res.status(500).json({ error: 'Internal server error' });
}
});
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndRemove(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data delete');
        res.status(200).json({message:'person Deleted Successfully'});
    }
    catch(err){
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports = router;