const express = require('express')
const app = express()
    // you are telling the compter to use the third party and the ability to make an api

app.use(express.json())
    //This prepares our api to receive json data from the body ody ody ody ody


const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
    // this follow everytime a new routes gets installed in the app shows its in iterm

// const models = require('./models')
const movieRoutes = require('./routes/moviesRoutes')
    // you need to define models in order to get access to it
app.use('/movies', movieRoutes)
    // const getAllMovies = async(req, res) => {
    //     //named the function and tell it to get the info
    //     // you need to define it to req and res or it wont know what to do
    //     try {
    //         let allMovies = await models.movie.findAll()
    //             // find all the movies inside model        
    //         res.json(allMovies)
    //             // respond with the info in a json object         
    //     } catch (error) {
    //         res.json({ error })
    //     }
    // }

// const getOneMovie = async(req, res) => {
//     try {
//         let oneMovie = await models.movie.findOne({
//             where: {
//                 id: req.params.id
//                     // req is the request and the paramator is the / after the url and that is what the id should equal too.  
//             }
//         })
//         res.json(oneMovie)

//     } catch (error) {
//         res.json({ error })
//     }
// }

// const createMovie = async(req, res) => {
//     try {
//         let makeMovie = await models.movie.create({
//             title: req.body.title,
//             director: req.body.director
//         })
//         res.json({ makeMovie })
//     } catch (error) {
//         res.json(error)
//     }
// }

// const updateMovie = async(req, res) => {
//     try {
//         let update = req.body
//         let newMovie = await models.movie.findOne({
//                 where: {
//                     id: req.params.id
//                 }
//             }) // go into movie and find the id with the same as the param
//         let final = await newMovie.update(update)
//             // when you find it wait for it and then update only the body
//         res.json({ final })
//             //once finished res in json the update
//     } catch (error) {
//         res.json({ error })
//     }
// }

// const deleteMovie = async(req, res) => {
//     try {
//         let erase = models.movie.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({ erase })
//     } catch (error) {
//         res.json({ error })
//     }
// }



// app.get('/movies/:id', getOneMovie)
// app.get('/movies', getAllMovies)
// app.post('/movies', createMovie)
// app.put('/movies/:id', updateMovie)
// app.delete('/movies/:id', deleteMovie)






app.listen(2222, () => {
    console.log('₍ᐢ`🐽´ᐢ₎ oink oink')
    routesReport.print()
})