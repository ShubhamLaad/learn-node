const express = require('express')
const app = express()

let products = [
  { id: 1, name: '1'},
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },  
]

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
/*The middleware function myLogger simply prints a message,
then passes on the request to the next middleware function in the stack by calling the next() function. */

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next()
})

app.get('/product', (req, res) => {
  res.status(200)
  res.send(products)
})

app.get('/product/:id', (req, res) => {
  res.status(200).json({
    product: products[req.params.id],
  })
})

app.post('/product', (req, res) => {
  console.log(req.body)
  res.status(200).json({
    status: 200,
    id: 1,
  })
})

app.listen(8000, () => console.log('Running port 8000...'))