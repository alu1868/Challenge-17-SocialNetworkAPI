const { Thought, User } = require('../models');

const thoughtController = {

    
    getAllThoughts(req, res) {
        Thought.find({})
        .sort({ _id: -1 })
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => res.status(400).json(err))
    },

    getThoughtById({ params }, res) {
        Thought.findOne(
            { _id: params.id }
        )
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
        .catch(err => res.status(400).json(err))
    },

    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
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

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id }, 
            body, 
            { new: true, runValidator: true }
        )
        .then((dbThoughts) => {
            if (!dbThoughts) {
                res.status(404).json({ message: 'no thought with that ID found'})
                return;
            }
            res.json(dbThoughts);
        })
        .catch((err) => res.sattus(400).json(err))
    },

    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughts => {
            if (!dbThoughts) {
                res.status(404).json({ message: 'no thought with that ID found' })
                return;
            }
            res.json(dbThoughts)
        })
        .catch((err) => res.status(400).json(err))
    },

    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
            )
            .then(dbThoughts => {
                if (!dbThoughts) {
                    res.status(404).json({ message: 'no thought with that ID found' });
                    return;
                }
                res.json(dbThoughts);
            })
            .catch(err => res.status(400).json(err));
    },

    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true, runValidators: true}
        )
        .then(dbThoughts => {
            if (!dbThoughts) {
                res.status(404).json({ message: 'no thought with that ID found'})
                return;
            }
            res.json(dbThoughts)
        })
        .catch((err) => res.status(400).json(err))
    }
}

module.exports = thoughtController