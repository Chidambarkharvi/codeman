import Item from "../models/item.js";
export const getItems = async(req,res)=>{
    console.log('get items')
    try {
        const item =await Item.find()
       
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}



export const createItem = async(req,res)=>{
    console.log('createitem',req.body)
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        
    }
}

export const deleteItem = async (req,res)=>{
    console.log("delete")
   
    await Item.deleteOne({ _id:  req.params.id });
    res.json({
      error: false,
      message: "Item deleted successfully",
    });
}