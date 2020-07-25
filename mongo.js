const mongoose = require('mongoose')
const thumbnailWidth = 258
const thumbnailHeight = 258

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://innl:${password}@cluster0-t1gu0.mongodb.net/recipetDB?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

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
})

const Recipe = mongoose.model('Recipe', recipeSchema)

const recipe = new Recipe({
  src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
  thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
  thumbnailWidth,
  thumbnailHeight,
  thumbnailCaption: "mongo"

})

recipe.save().then(res => {
  console.log('recipe saved!')
  mongoose.connection.close()
})
