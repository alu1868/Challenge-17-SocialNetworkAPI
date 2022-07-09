const { Thought, User } = require('../models');

const thoughtController = {

    
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({})
            .then(dbThoughts => res.json(dbThoughts))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    getThoughtById() {

    },

    createThought() {

    },

    updateThought() {

    },

    removeThought() {

    },

    createReaction() {

    },

    removeReaction() {

    }
}

modeul.exports = thoughtController