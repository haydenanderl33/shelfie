module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_Inventory().then(inventory => {
            res.status(200).send(inventory)
        })
         
    },
    addInventory: (req,res) =>{
        const db = req.app.get('db')
        const {product_name,image,price} = req.body
        const newProduct = {...req.body}
        db.add_Inventory({product_name, image, price})
        .then((newProduct) =>
            res.status(200).send(newProduct))
        .catch((err) => res.status(500).send(err))    
        
        
    } 

}
