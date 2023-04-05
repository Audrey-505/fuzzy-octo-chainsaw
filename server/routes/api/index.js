const router = require('express').Router()
const userRoutes = require('./userRoutes')

router.use('/users', userRoutes)

//new 
const chatRoutes = require('./chatRoutes')
router.use('/chat', chatRoutes)

const messageRoutes = require('./messageRoutes')
router.use('/message', messageRoutes)

module.exports = router