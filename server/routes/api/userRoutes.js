const router  = require('express').Router()

const {
    getUsers,
    getUser,
    createUser,
    login
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getUser)

router.route('/login').post(login)


module.exports = router