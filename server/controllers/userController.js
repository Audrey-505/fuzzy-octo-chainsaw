const { User } = require('../models')
const { signToken } = require('../utils/auth');

module.exports = {
    getUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getUser(req, res) {
        User.findOne({_id: req.params.userId})
        .then(async (user) => 
            !user
            ? res.status(404).json({message: 'no user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },

    async createUser({ body }, res) {
        const user = await User.create(body);
    
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },
}