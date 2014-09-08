var express = require('express'),
  router  = express.Router(),
  bodyParser = require('body-parser'),
  app = express();

// parse application/json
app.use(bodyParser.json());

// Set route prefix
app.use('/v1', router);

router.get('/pins', function(req, res){
  // Get a list of a user's pins
  var pins = [{
    name: 'City Beer Store',
    location: [37.7756991,-122.4095929],
    date: new Date(),
    note: 'Picked up some amazing beers with Tasha!',
    rating: 5
  }]

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    success: true,
    errors: [],
    results: pins
  }));
});


router.post('/pins', function(req, res){
  // Create a new pin
  var name = req.body['name'],
    location = req.body['location'],
    date = new Date(),
    note = req.body['note']
    rating = req.body['rating'];

  var pin = [{
    'name': name,
    'location': location,
    'date': date,
    'note': note,
    'rating': rating
  }]

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    success: true,
    errors: [],
    results: pin
  }));
});


var server = app.listen(3000, '0.0.0.0', function() {
  console.log('Listening on %s:%d', server.address().address, server.address().port);
});
