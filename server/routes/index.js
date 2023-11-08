const router = require('express').Router();
const Controller = require('../controllers/controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const authorizationEditProfile = require('../middlewares/authorizationEditProfile');


router.post('/register', Controller.register);
router.post('/login', Controller.login);


router.get('/post', authentication, Controller.getAllPost);
router.get('/tag', authentication, Controller.getAllTag);
router.post('/post', authentication, Controller.addPost);
router.delete('/post/:id', authentication, authorization, Controller.deletePost);
router.get('/user/:id', authentication, Controller.getUserProfile);
router.get('/userProfile/:id', authentication, Controller.fetchUserProfile);
router.post('/userProfile', authentication, Controller.submitProfile);
router.put('/userProfile/:id', authentication, authorizationEditProfile, Controller.editProfile);




module.exports = router;