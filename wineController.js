const models = require('./models')

const wineController = {}

wineController.getAll = async (req,res)=>{

    try {
        
        let wine = await models.winelist.findAll()
    
        res.json({wine})
    } catch (error) {
        res.json({error})  
    }
}

wineController.find = async (req,res)=>{

    try {
        let wine = await models.winelist.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({wine}) 
    } catch (error) {
        res.json({error})
    }
}

wineController.create = async (req,res)=>{

    try {
        let newWine = await models.winelist.create({
           name: req.body.name,
           year: req.body.year,
           grape: req.body.grape,
           country: req.body.country,
           region: req.body.region,
           description: req.body.description,
           picture: req.body.picture,
           price: req.body.price
        })
        res.json({newWine})      

    } catch (error) {
        res.json({error})
    }

}

wineController.update  = async (req,res)=>{

    try {
        let updates = req.body
        let wineToUpdate = await models.winelist.findOne({
        where:{
            id: req.params.id
        }
      })
        let final = await wineToUpdate.update(updates)
        res.json({final})
    
    } catch (error) {
        res.json({error})
    }

}

wineController.delete = async(req,res) => {
    try {
        let wineToDelete = await models.winelist.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({wineToDelete})
    } catch (error) {
        res.json({error})
    }
}

module.exports = wineController;