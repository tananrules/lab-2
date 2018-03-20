const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: true, unique: true },
  password: { type: 'String', required: true},
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('user', userSchema);
