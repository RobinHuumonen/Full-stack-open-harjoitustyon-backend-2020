const recipesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Recipe = require('../models/recipe')
const User = require('../models/user')

const thumbnailWidth = 436
const thumbnailHeight = 436

recipesRouter.get('/', async (req, res) => {
  const recipes = await Recipe
    .find({}).populate('user', { username: 1, id: 1 })

  res.json(recipes.map(recipe => recipe.toJSON()))
})

recipesRouter.get('/:id', async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  if (recipe) {
    res.json(recipe.toJSON())
  } else {
    res.status(404).end()
  }
})

recipesRouter.delete('/:id', async (req, res) => {
  if (!req.token) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  const recipe = await Recipe.findById(req.params.id)
  const user = await User.findById(decodedToken.id)

  if (recipe.user.toString() === user._id.toString()) {
    await Recipe.findByIdAndRemove(req.params.id)
    res.status(204).end()
  } else {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
})

recipesRouter.post('/', async (req, res) => {
  const body = req.body

  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const recipe = new Recipe({
    src: body.src,
    thumbnail: body.thumbnail,
    thumbnailWidth,
    thumbnailHeight,
    caption: body.caption,
    thumbnailCaption: body.thumbnailCaption,
    user: user._id
  })
  

  const savedRecipe = await recipe.save()
  user.recipes = user.recipes.concat(savedRecipe._id)
  await user.save()

  res.status(201).json(savedRecipe.toJSON())
})

recipesRouter.put('/:id', async (req, res, nxt) => {
  const body = req.body

  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const newRecipe = {
    src: body.src,
    thumbnail: body.thumbnail,
    thumbnailWidth,
    thumbnailHeight,
    caption: body.caption,
    thumbnailCaption: body.thumbnailCaption,
    user: user._id
  }

  const recipe = await Recipe.findById(req.params.id)

  if (recipe.user.toString() === user._id.toString()) {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, newRecipe, { new: true })
    res.status(200).json(updatedRecipe.toJSON())
  } else {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

})

module.exports = recipesRouter
