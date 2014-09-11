var db = require('../db');
var Schema = db.Schema;
var hash = require('mongoose-hash');

// Define the schema
var PinSchema = new Schema({
  pin_id: {
    type: String, 
    required: true,
    index: { 
      unique: true 
    }
  },
  date: String,
  location: Array,
  name: String,
  note: String,
  rating: Number,
  user_id: String
});

// Add a field to generate a new pin hash (`pin_id`) for each new pin
PinSchema.plugin(hash, {
  field: 'pin_id',
  size: 6
});

module.exports = db.model('Pin', PinSchema);
