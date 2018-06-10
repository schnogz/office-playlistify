const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')
const requestIp = require('request-ip')
const webpack = require('webpack')
const webpackConfig = require('./../webpack.config')
const compiler = webpack(webpackConfig)

const isProduction = process.env.NODE_ENV && process.env.NODE_ENV.indexOf('production') !== -1
let app = express()

/* eslint-disable no-console */

// setup middleware
app.use(cors())
app.use(requestIp.mw())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('method-override')())

// setup hot reloading
app.use(require('webpack-dev-middleware')(compiler, {
  logLevel: 'warn',
  hot: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

// add api routes
app.use(require('./routes/index'))

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

// start server
let server = app.listen(process.env.PORT || 8080, function () {
  if (!isProduction) {
    console.log('Express server environment mode: DEV')
    console.log('Express server listening port: ' + server.address().port)
  } else {
    console.log('Express server environment mode: PROD')
    console.log('Express server listening port: ' + server.address().port)
  }
})
