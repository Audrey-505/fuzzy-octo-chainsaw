// import user model
const { createUser } = require('../../client/src/utils/api');
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // get a single user by id or username
   async getSingleUser({ user = null, params}, res) {
    const findUser = await User.findOne({
        $or: [{_id: user 
            ? user._id
            : params.id},
            {
            username: params.username
            }
        ],
    })
        if(!findUser) {
        return res.status(400).json({message: 'Cannot locate user with this ID'})
        }
        res.json(findUser)
    },

    // create a user, sign token, and send it back to client/src/component/Signup.js
    async createUser({body}, res){
        const user = await User.create(body)

        if(!user){
            return res.status(400).json({message: 'Cannot Create User, Something went wrong'})
        }
        const token = signToken(user)
        res.json({token, user})
    },

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    // {body} is destructured req.body
    async userLogin({body}, res) {
        const user =await User.findOne({$or: [{username: body.username}, {email: body.email}] })

        if(!user){
            return res.status(400).json({message: 'Cannot locate this user logging in :('})
        }

        const correctPw = await user.isCorrectPassword(body.password)

        if(!correctPw){
            return res.status(404).json({message: 'Incorrect Password, Try Again'})
        }
        const token =signToken(user)
        res.json({token, user})
    }

}