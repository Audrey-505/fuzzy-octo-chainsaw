const router = require('express').Router()

const {
    getMessage,
    newMessage
} = require('../../controllers/messageController')

router.route('/:chatId').get(getMessage)

router.route('/').post(newMessage)

module.exports = router