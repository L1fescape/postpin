// Setup
// =======================================

// Import packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser() for parsing POST body parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for all requests 
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Variables and settings
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';


// Routes
// =======================================

// Config
// ------

// Create router
var router  = express.Router();

// Set router prefix
app.use('/v1', router);

// Import resources
var Users = require('./api/user');
var Pins = require('./api/pin');


// Routes
// ------

// Create a new user
router.post('/users', function(req, res){
  var user_info = {
    name: req.body.name
  };

  Users.create(user_info)
    .then(function(user){
      // return newly created user
      return res.json({
        success: true,
        results: [user],
        errors: []
      });
    })
    .fail(function(error){
      // return any errors encountered
      res.statusCode = 400;
      return res.json({
        success: false,
        results: [],
        errors: [error]
      });
    });
});

// Get a user's info
router.get('/users/:user_id', function(req, res){
  var userId = req.params.user_id;

  // find a user based on userId
  Users.find(userId)
    .then(function(user){
      // return user info
      return res.json({
        success: true,
        results: [user],
        errors: []
      });
    })
    .fail(function(error){
      // return any errors encountered
      res.statusCode = 400;
      return res.json({
        success: false,
        results: [],
        errors: [error]
      });
    });
});

// Retrieve a user's pins
router.get('/users/:user_id/pins', function(req, res){
  var userId = req.params.user_id;

  // find a user based on userId
  Users.find(userId)
    .then(function(user){
      // find pins associated with that user
      return Pins.findUserPins(user);
    })
    .then(function(pins){
      // return results if there were no errors
      return res.json({
        success: true,
        results: pins,
        errors: []
      });
    })
    .fail(function(error){
      // return any errors encountered
      res.statusCode = 400;
      return res.json({
        success: false,
        results: [],
        errors: [error]
      });
    });
});

// Create a pin
router.post('/users/:user_id/pins', function(req, res){
  var userId = req.params.user_id;
  var pin = {
    date: new Date(),
    location: req.body.location,
    name: req.body.name,
    note: req.body.note,
    rating: req.body.rating
  };

  // find a user based on userId
  Users.find(userId)
    .then(function(user){ 
      // create a new pin
      return Pins.create(user, pin);
    })
    .then(function(pin){
      // return results if there were no errors
      return res.json({
        success: true,
        results: [pin],
        errors: []
      });
    })
    .fail(function(error){
      // return any errors encountered
      res.statusCode = 400;
      return res.json({
        success: false,
        results: [],
        errors: [error]
      });
    });
});


// Start server
// =======================================

app.listen(port, host, function() {
  console.log('Listening on %s:%d', host, port);
});
