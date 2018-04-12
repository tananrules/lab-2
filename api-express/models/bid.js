const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bidSchema = new Schema({
  value: { type: 'String', required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'user' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('bid', bidSchema);
