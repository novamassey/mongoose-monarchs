const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  haves: [{
    type: String,
    enum: ['Eggs', 'Caterpillars', 'Milkweed', 'Milkweed Seeds', 'Enclosure', 'Pollinators']
  }],
  image: String,
  needs: [{
    type: String,
    enum: ['Eggs', 'Caterpillars', 'Milkweed', 'Milkweed Seeds', 'Enclosure', 'Pollinators']
  }],
  trades: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);