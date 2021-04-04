const models = require('../models')

const moviesControllers = {}

moviesControllers.getAll = async(req, res) => {
    //named the function and tell it to get the info
    // you need to define it to req and res or it wont know what to do
    try {
        let allMovies = await models.movie.findAll()
            // find all the movies inside model        
        res.json(allMovies)
            // respond with the info in a json object         
    } catch (error) {
        res.json({ error })
    }
}

moviesControllers.getOne = async(req, res) => {
    try {
        let oneMovie = await models.movie.findOne({
            where: {
                id: req.params.id
                    // req is the request and the paramator is the / after the url and that is what the id should equal too.  
            }
        })
        res.json(oneMovie)

    } catch (error) {
        res.json({ error })
    }
}

moviesControllers.create = async(req, res) => {
    try {
        let makeMovie = await models.movie.create({
            title: req.body.title,
            director: req.body.director
        })
        res.json({ makeMovie })
    } catch (error) {
        res.json(error)
    }
}

moviesControllers.update = async(req, res) => {
    try {
        let update = req.body
        let newMovie = await models.movie.findOne({
                where: {
                    id: req.params.id
                }
            }) // go into movie and find the id with the same as the param
        let final = await newMovie.update(update)
            // when you find it wait for it and then update only the body
        res.json({ final })
            //once finished res in json the update
    } catch (error) {
        res.json({ error })
    }
}

moviesControllers.delete = async(req, res) => {
    try {
        let erase = models.movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ erase })
    } catch (error) {
        res.json({ error })
    }
}

module.exports = moviesControllers;