const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  haves: [{ type: String, 
    enum: ['Eggs', 'Caterpillars', 'Milkweed', 'Milkweed Seeds', 'Enclosure', 'Pollinators']}],
  needs: [{ type: String, 
    enum: ['Eggs', 'Caterpillars', 'Milkweed', 'Milkweed Seeds', 'Enclosure', 'Pollinators']}],
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);