const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');
const methods = require('methods');
const requestIp = require('request-ip');

const webpack = require('webpack');
const webpackConfig = require('./../config/webpack.config');
const compiler = webpack(webpackConfig);

const isProduction = process.env.NODE_ENV === 'production';
let app = express();

// setup middleware
app.use(cors());
app.use(requestIp.mw());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(require('./routes/index'));
app.use(require("webpack-dev-middleware")(compiler, {
  logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
// development config
if (!isProduction) {
  /// catch 404 and forward to error handler
  app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler will print stacktrace
  app.use(errorhandler());
  app.use(function (err, req, res) {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
} else {
  // production config
  // serve built static assets
  app.use(express.static(path.join(__dirname, '../build')));
  app.use(function (req, res) {
    res.status(404);
  });
}

// start server
var server = app.listen(process.env.PORT || 8080, function () {
  if (!isProduction) {
    console.log('Express server environment mode: DEV');
    console.log('Express server listening port: ' + server.address().port);
    console.log(`REMINDER! Webpack will proxy requests to /api on port ${server.address().port} to Express.`);
  } else {
    console.log('Express server environment mode: PROD');
    console.log('Express server listening port: ' + server.address().port);
  }
});