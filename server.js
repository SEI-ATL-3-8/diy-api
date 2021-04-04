const express = require('express')
const app = express()
    // you are telling the compter to use the third party and the ability to make an api

app.use(express.json())
    //This prepares our api to receive json data from the body ody ody ody ody


const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
    // this follow everytime a new routes gets installed in the app shows its in iterm

const models = require('./models')
    // you need to define models in order to get access to it


const movieRoutes = require('./routes/moviesRoutes')
    // you need to define models in order to get access to it
app.use('/movies', movieRoutes)





app.listen(2222, () => {
    console.log('₍ᐢ`🐽´ᐢ₎ oink oink')
    routesReport.print()
})