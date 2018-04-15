const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  skills: { type: 'String', required: true },
  budget: { type: 'String', required: true },
  bids: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('job', jobSchema);
