const { Chat } = require('../models')
const { signToken } = require('../utils/auth');

module.exports = {
    async getChat(req, res){
        try{
            const chat = await Chat.find({
                members: { $in: [req.params.userId]},
            })
            res.status(200).json(chat)
        }catch(error){
            res.status(500).json(error)
        }
    },

    async newChat(req, res){
        const newChat = new Chat({
            members:[req.body.sender, req.body.receiver]
        })
        try{
            const savedChat = await newChat.save()
            res.status(200).json(savedChat)
        }catch(error){
            res.status(500).json(error)
        }
    }
}