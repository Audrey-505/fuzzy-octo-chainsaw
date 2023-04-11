const router = require('express').Router()

const {
    getChat,
    newChat
} = require('../../controllers/chatController')

router.route('/:userId').get(getChat)

router.route('/').post(newChat)

module.exports = router

