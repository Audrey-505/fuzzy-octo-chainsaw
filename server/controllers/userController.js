const { User } = require('../models')
const { signToken } = require('../utils/auth');

module.exports = {
    getUser(req, res) {
        User.findOne({_id: req.params.userId})
        .then(async (user) => 
            !user
            ? res.status(404).json({message: 'no user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    
    getUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },

    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { email: params.email }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
        res.json(foundUser);
      },

    async createUser({ body }, res) {
        const user = await User.create(body);
    
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },

      async login({ body }, res ) {
        const user = await User.findOne({ $or: [{email: body.email }] })
        if(!user) {
            return res.status(400).json({ message: 'Cant find this account'})
        }
        const correctPw = await user.isCorrectPassword(body.password)
        if(!correctPw){
            return res.status(400).json({message: 'Incorrect password'})
        }
        const token = signToken(user)
        res.json({ token, user })
      }
}

//testing commits