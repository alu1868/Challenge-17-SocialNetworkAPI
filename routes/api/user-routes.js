const router = require('express').Router();
const userController = require('../../controllers/user-controller')

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = userController;

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:id/friends/:friendsId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;