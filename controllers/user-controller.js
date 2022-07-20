const { User } = require('../models')

const userController = {
 
    getAllUsers(req, res) {
        User.find({})
        .sort({ _id: -1 })
        .then(dbUsers => res.json(dbUsers))
        .catch(err =>  res.status(400).json(err))
    },

    getUserById({ params }, res) {
        User.findOne(
            { _id: params.id }
        )
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUsers => {
            if (!dbUsers) {
                res.status(404).json({ message: 'no user with that ID found'})
                return;
            }
            res.json(dbUsers)
        })
        .catch((err) => res.status(400).json(err))
    },

    createUser({ body }, res) {
        User.create(body)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(400).json(err))
    },

    updateUser({ params, body }, res)  {
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
        .then(dbUsers => {
            if (!dbUsers) {
                res.status(404).json({ message: 'no user with that ID found'})
                return;
            }
            res.json(dbUsers)
        })
        .catch(err => res.status(400).json(err))
    },

    deleteUser({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id }
        )
        .then(dbUsers => {
            if (!dbUsers) {
                res.status(404).json({ message: 'no user with taht ID found' })
                return;
            }
            res.json(dbUsers)
        })
        .catch(err => res.status(400).json(err))
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { friends: params.friendId } },
            { new: true, runValidators: true}
        )
        .then (dbUsers => {
            if (!dbUsers) {
                res.status(404).json({ message: 'no users with that ID found'})
                return;
            }
            res.json(dbUsers)
        })
        .catch((err) => res.status(400).json(err))
    },

    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true, runValidators: true}
        )
        .then(dbUsers => {
            if (!dbUsers) {
                res.status(404).json({ message: 'no user with that ID found'})
                return;
            }
        })
        .catch((err) => res.status(400).json(err))
    }

}

module.exports = userController