var Q = require('q');
var Pin = require('../models/pin');

module.exports = {

  // Find pin based on `pin_id`
  find: function( pinId ){
    var defer = Q.defer();

    // Check if the pinId is valid
    if( !pinId ){
      return defer.reject('You must provide a pin id.');
    }

    Pin.findOne({ pin_id: pinId }, function(err, pin){
      if( err || !pin ){
        defer.reject('Could not find pin.');
      } else {
        defer.resolve(pin);
      }
    });

    return defer.promise;
  },

  // Find pins associated with a given user
  findUserPins: function( user ){
    var defer = Q.defer();

    // Check if the user is valid
    if( !user ){
      return defer.reject('You must provide a user.');
    }

    Pin.find({ user_id: user.user_id }, function(err, pins){
      if( err ){
        defer.reject('Could not find pins.');
      } else {
        defer.resolve(pins);
      }
    });

    return defer.promise;
  },

  // Create a new Pin
  create: function( user, pin_info ){
    var defer = Q.defer();

    // Check if the user is valid
    if( !user || !user.user_id ){
      return defer.reject('You must provide a user.');
    }

    // Include the owner of the pin
    pin_info.user_id = user.user_id;

    // Create new pin model
    var pin = new Pin( pin_info );

    // Save the pin
    pin.save(function(err){
      if( err ){
        defer.reject('Could not create pin.');
      } else {
        defer.resolve(pin);
      }
    });

    return defer.promise;
  }
};
