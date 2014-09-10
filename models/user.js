var db = require('../db');
var Schema = db.Schema;

// Define the schema
var UserSchema = new Schema({
  user_id: Number,
  name: String
});

module.exports = db.model('User', UserSchema);
