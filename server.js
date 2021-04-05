const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
console.log('The Server is Listening!')
routesReport.print()
})

const models = require('./models')

const getAllPeople = async (req,res) => {
  try {
  let people = await models.people.findAll()
  res.json({people})
  } catch (error) {
  res.json({error})
  }
}

const getOnePerson = async (req,res) => {
  try {
    let person = await models.people.findOne({
    where: {
        id: req.params.id 
    }
    })
      res.json({person}) 
    } catch (error) {
      res.json({error})
    }
}

const addPerson = async (req,res) => {
try {
  let newPerson = await models.person.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    causeOfDeath: req.body.causeOfDeath
  })
    res.json({newPerson})
  } catch (error) {
    res.json({error})
  }
}

const updatePerson = async (req,res) => {
  try {
      let whatToUpdate = req.body
    let personToUpdate = await models.people.findOne({
      where:{
          id: req.params.id
      }
    })
    let actuallyUpdate = await personToUpdate.update(whatToUpdate)
    res.json({actuallyUpdate})
  } catch (error) {
      res.json({error})
  }
}

const deletePerson = async (req,res) => {
  try {
    let removePerson = await models.people.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({removePerson})
  } catch (error) {
    res.json({error})
  }
}

app.get('/people', getAllPeople)
app.get('/people/:id', getOnePerson)
app.post('/people', addPerson)
app.put('/people/:id',updatePerson)
app.delete('/people/:id', deletePerson)

// app.get('/people', (req,res) => {
//   console.log('yo, get it works!')
//   res.send('GATHER DATA!')
// })

// app.get('/people/:id', (req,res) => {
//   console.log(req.params)
//   res.send(`You looking for person number ${req.params.id}`)
// })

// app.post('/people', (req,res) => {
//   console.log('yo, post works!')
//   res.send('A New Player Has Entered!')
// })

// app.put('/people/:id', (req,res) => {
//   console.log(`Person with ID number ${req.params.id} has been updated`)
//   res.send('Edit Complete')
// })

// app.delete('/people/:id', (req,res) => {
//   console.log(`Person with ID number ${req.params.id} has been deleted`)
//   res.send('DELETED')
// })