'use-strict'
const { sortString } = require('utils')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  next()
})

app.use(router)
app.use('/api', router)
app.use('/sort', router)
router.post('/sort', (req, res) => {
  sortString(req.body.string)
})

// initialize server
app.listen(PORT, function() {
  console.log(`api running on port ${PORT}`)
})
