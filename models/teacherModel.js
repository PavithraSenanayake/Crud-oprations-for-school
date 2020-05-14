const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Teacher = new Schema({
  f_name: {
    type: String
  },
  l_name: {
    type: String
  },
  subject: {
    type: String
  },
  district: {
    type: String
  }
},{
    collection: 'teacher'
});

module.exports = mongoose.model('Teacher', Teacher);