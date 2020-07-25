require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Recipe = require('./models/recipe')

const requestLogger = (req, res, nxt) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  nxt()
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, nxt) => {
  console.log(err.message)

  if (err.name === 'CastError') {
    return res.status(400).send({ err: 'malformatted id' })
  }

  nxt(err)
}

const thumbnailWidth = 258
const thumbnailHeight = 258

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/recipes', (req, res) => {
  Recipe.find({}).then(recipes => {
    res.json(recipes)
  })
})

app.get('/api/recipes/:id', (req, res, nxt) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe)
      } else {
        res.status(404).end()
      }
    })
    .catch(err => nxt(err))
})

app.delete('/api/recipes/:id', (req, res, nxt) => {
  Recipe.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => nxt(error))
})

app.post('/api/recipes', (req, res) => {
  const body = req.body

  const recipe = new Recipe({
    src: body.src,
    thumbnail: body.thumbnail,
    thumbnailWidth,
    thumbnailHeight,
    caption: body.caption,
    thumbnailCaption: body.thumbnailCaption
  })

  recipe.save().then(savedRecipe => {
    res.json(savedRecipe)
  })
})

app.put('/api/recipes/:id', (req, res, nxt) => {
  const body = req.body

  const recipe = {
    src: body.src,
    thumbnail: body.thumbnail,
    thumbnailWidth,
    thumbnailHeight,
    caption: body.caption,
    thumbnailCaption: body.thumbnailCaption
  }

  Recipe.findByIdAndUpdate(req.params.id, recipe, { new: true })
    .then(updatedRecipe => {
      res.json(updatedRecipe)
    })
    .catch(error => nxt(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})