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
        
        
    },
    deleteInventory: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_Inventory(+id)
        .then(() => res.send('all gucci'))
        .catch((err) => res.status(500).send(err))
    },
    editInventory: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_name,image,price} = req.body
        db.edit_Inventory([+id, product_name, image, price])
        .then((updatedProduct) => res.status(200).send(updatedProduct))
        .catch(err => res.status(500).send(err))

    }

}
