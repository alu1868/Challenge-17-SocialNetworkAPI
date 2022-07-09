const { Thought, User } = require('../models');

const thoughtController = {

    
    getAllThoughts(req, res) {
        Thought.find({})
            .sort({ _id: -1 })
            .then(dbThoughts => res.json(dbThoughts))
            .catch(err => {
                res.status(400).json(err)
            })
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .then(dbThoughts => {
                if(!dbThoughts) {
                    res.status(404).json({ message: 'no thought with that ID found' })
                    return;
                }
                res.json(dbThoughts);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },

    createThought({ params }, res) {
        Thoughts.create(body)
            .then(({ _id }) => {
                return User.findOneandUpdate(
                    { _id: params.userId},
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbThoughts => {
                if (!dbThoughts) {
                    res.status(404).json({ message: 'no user with that ID found' })
                    return;
                }
                res.json(dbThoughts);
            })
            .catch((err) => res.json(err))
    },

    updateThought() {
        Thought.findOneandUpdate(
            { _id: params.id }, body, { new: true, runValidator: true }
        )
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then((dbThoughts) => {
            if (!dbThoughts) {
                res.status(404).json({ message: 'no thought with that ID found'})
                return;
            }
            res.json(dbThoughts);
        })
        .catch((err) => res.sattus(400).json(err))
    },

    removeThought() {
        Thoughts.findOneandDelete({ _id: params.id })
        .then(dbThoughts => {
            if (!dbThoughts) {
                res.status(404).json({ message: 'no thought with that ID found' })
                return;
            }
            res.json(dbThoughts)
        })
        .catch((err) => res.status(400).json(err))
    },

    createReaction() {

    },

    removeReaction() {

    }
}

modeul.exports = thoughtController