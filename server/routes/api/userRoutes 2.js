const router  = require('express').Router()

const {
    getUsers,
    getUser,
    getSingleUser,
    createUser,
    login
} = require('../../controllers/userController')

const { authMiddleware } = require('../../utils/auth')

router.route('/:userId').get(getUser)

router.route('/login').post(login)

//test for displaying chats
router.route('/self').get(authMiddleware, getSingleUser)

router.route('/').get(getUsers).post(createUser)

module.exports = router