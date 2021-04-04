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

// const models = require('./models')

// const addPerson = async (req,res) => {
//   let person = await models.person.create({
//     where: {

//     }
//   })
// }
// addPerson()

app.get('/people', (req,res) => {
  console.log('yo, get it works!')
  res.send('GATHER DATA!')
})

app.get('/people/:id', (req,res) => {
  console.log(req.params)
  res.send(`You looking for person number ${req.params.id}`)
})

app.post('/people', (req,res) => {
  console.log('yo, post works!')
  res.send('A New Player Has Entered!')
})

app.put('/people/:id', (req,res) => {
  console.log(`Person with ID number ${req.params.id} has been updated`)
  res.send('Edit Complete')
})

app.delete('/people/:id', (req,res) => {
  console.log(`Person with ID number ${req.params.id} has been deleted`)
  res.send('DELETED')
})