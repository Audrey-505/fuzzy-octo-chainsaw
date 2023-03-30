const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  userLogin
} = require('../../controllers/userCont');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(userLogin);

router.route('/me').get(authMiddleware, getSingleUser);


module.exports = router;