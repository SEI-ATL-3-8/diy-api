const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const models = require('./models')

const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

async function getAllWines(req,res){
    try {
        const  wines = await models.wine.findAll()
        res.json(wines)
        
    }catch{
        res.json({error})
    }
    
}

async function getWinesById(req,res){
    try {
        let wines =await models.wine.findoOne({
            where:{
                id: req.params.id
            }
        })
        res.json({wines}) 
    } catch (error) {
        
    }
    
}
async function createWine(req,res){
    let newWine = await models.wine.create({
        name: req.body.name,
        year: req.body.year,
        grapes: req.body.grapes,
        country: req.body.country,
        region: req.body.region,
        description: req.body.description,
        img_url: req.body.img_url,
        price: req.body.price
    })
    res.json({newWine})
}
async function updateWine(req,res){
    let updates = req.body
    let wineUpdate = await models.wine.findOne({
        where:{
            id: req.params.id
        }
    })
    let final = await wineUpdate.update(updates)
    res.json({final})

}
async function deleteWine(req,res){
    let delWine = await models.wine.destroy({
        where:{
            id: req.params.id
        }
    })
    res.json({delWine})
}

app.get('/wines', getAllWines)
app.get('/wines/:id', getWinesById)
app.post('/wines', createWine)
app.put('/wines/:id', updateWine)
app.delete('/wines/:id',deleteWine)


app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})
