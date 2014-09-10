var Q = require('q');
var User = require('../models/user');

module.exports = {
  find: function( userId ){
    var defer = Q.defer();

    // Check if the userId is valid
    if( !userId ){
      return defer.reject('You must provide a user id.');
    }

    User.findOne({ user_id: userId }, function(err, user){
      if( err || !user ){
        defer.reject('Could not find user.');
      } else {
        defer.resolve(user);
      }
    });

    return defer.promise;
  }
};
