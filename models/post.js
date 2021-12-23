const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  userName: String,
})

const postSchema = new Schema({
  title: String,
  topic: {
    type: String,
    enum: ['Butterfly', 'Caterpillar', 'Plants', 'Pests', 'Other']
  },
  image: String,
  content: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Post', postSchema);