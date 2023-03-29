const router  = require('express').Router()

const {
    getUsers,
    getUser
} = require('../../controllers/userController')

router.route('/').get(getUsers)

router.route('/:userId').get(getUser)


module.exports = router