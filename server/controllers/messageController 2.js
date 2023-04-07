const { Message } = require('../models')

module.exports = {
    async getMessage(req, res){
        try{
            const messages = await Message.find({
                chatId: req.params.chatId,
            })
            res.status(200).json(messages)
        }catch(error){
            res.status(500).json(error)
        }
    },

    async newMessage(req, res){
        const newMessage = new Message(req.body)
        try{
            const savedMessage = await newMessage.save()
            res.status(200).json(savedMessage)
        }catch(error){
            res.status(500).json(error)
        }
    }
}