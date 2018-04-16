const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: true, unique: true },
  password: { type: 'String', required: true},
  first_name: { type: 'String', required: true},
  last_name: { type: 'String', required: true},
  bio: { type: 'String' },
  address: { type: 'String' },
  skills: [{ type: 'String' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('user', userSchema);
