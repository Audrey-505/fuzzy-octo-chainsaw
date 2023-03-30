const router  = require('express').Router()

const {
    getUsers,
    getUser,
    createUser
} = require('../../controllers/userController')

router.route('/users').get(getUsers).post(createUser)

router.route('/:userId').get(getUser)


module.exports = router