const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema ({
  name: String,
  desc: String,
  img:
  {
      data: Buffer,
      contentType: String
  }
})

const postSchema = new Schema({
  title: String,
  topic: {
    type: String, 
    enum: ['Butterfly', 'Caterpillar', 'Plants', 'Pests', 'Other']
      },
    image:[{imageSchema}],
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
  timestamps: true
});


module.exports = mongoose.model('Post', postSchema);