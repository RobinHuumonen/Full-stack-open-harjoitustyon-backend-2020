const mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  thumbnailWidth: {
    type: Number,
    required: true,
  },
  thumbnailHeight: {
    type: Number,
    required: true,
  },
  caption: {
    type: String,
  },
  thumbnailCaption: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

recipeSchema.set('toJSON', {
transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id.toString()
  delete returnedObject._id
  delete returnedObject.__v
}
})

module.exports = mongoose.model('Recipe', recipeSchema)