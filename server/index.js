const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const requestIp = require('request-ip');
const webpack = require('webpack');
const webpackConfig = require('./../webpack.config');
const compiler = webpack(webpackConfig);

const isProduction = process.env.NODE_ENV && process.env.NODE_ENV.indexOf('production') !== -1;
let app = express();

// setup middleware
app.use(cors());
app.use(requestIp.mw());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('method-override')());

// setup hot reloading
app.use(require("webpack-dev-middleware")(compiler, {
  logLevel: 'warn',
  publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// add api routes
app.use(require('./routes/index'));

// start server
var server = app.listen(process.env.PORT || 8080, function () {
  if (!isProduction) {
    console.log('Express server environment mode: DEV');
    console.log('Express server listening port: ' + server.address().port);
  } else {
    console.log('Express server environment mode: PROD');
    console.log('Express server listening port: ' + server.address().port);
  }
});



// app.get("/", function(req, res) {
//   res.sendFile(webpackConfig.output.publicPath + '/index.html');
// });


// development config
// if (!isProduction) {
//   /// catch 404 and forward to error handler
//   app.use(function (req, res, next) {
//     let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });
//
//   // error handler will print stacktrace
//   app.use(errorhandler());
//   app.use(function (err, req, res) {
//     console.log(err.stack);
//     res.status(err.status || 500);
//     res.json({
//       errors: {
//         message: err.message,
//         error: err
//       }
//     });
//   });
// } else {
//   // production config
//   // serve built static assets
//   app.use(express.static(path.join(__dirname, '../build')));
//   app.use(function (req, res) {
//     res.status(404);
//   });
// }

