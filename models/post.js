const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  topic: {
    type: String, 
    enum: ['Butterfly', 'Caterpillar', 'Plants', 'Pests', 'Other']
      },
    imgContent: {
      data: Buffer,
      contentType: String
      },
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);