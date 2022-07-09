const router = require('express').Router()
const thoughtController = require('../../controllers/thought-controller')

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = thoughtController

router.route('/')
    .get(getAllThoughts)

router.route('/:userId')
    .post(createThought)

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

router.route('/:thoughtId/readctions')
    .post(createReaction)

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router