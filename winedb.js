const models = require('./models')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const getALLwines = async (req,res) => {
    try {
    let wines = await models.wine.findAll()
    
    res.json({wines})
    
} catch (error) {
    res.json({error})
        
    }
}

const deleteWine = async(req,res) => {
    let delwine = await models.wine.destroy({
        where:{
            id: req.params.id
        }
    })
    res.json({deleteWine})
}

const getOnewine = async (req,res) =>{
    let wine = await models.wine.findOne({
        where:{
            id: req.params.id
        }
    })
    res.json({wine})
}

const newWine = async (req,res) =>{
    let wine = await models.wine.create({
        name: req.body.name,
        year: req.body.year,
        grapes: req.body.grapes,
        country: req.body.country,
        region: req.body.region,
        description: req.body.description,
        picture: req.body.picture,
        price: req.body.price        
    })
    res.json({wine})
}

const updateWine = async (req,res) => {
    let update = req.body
    let wineUpdate = await models.wine.findOne({
        where:{ 
            id: req.params.id
        }
    })
    let final = await wineUpdate.update(update)
    res.json({final})
}

app.get('/wines',getALLwines)
app.delete('/wines/:id',deleteWine)
app.get('/wines/:id',getOnewine)
app.post('/wines',newWine)
app.put('/wines/:id', updateWine)






//   models.wine.create({
//     name: 'coolWine3',
//     year: '1999',
//     grapes: 'purple',
//     country: 'korea',
//     region: 'south',
//     description: 'taste like purple',
//     price: 192
// })
