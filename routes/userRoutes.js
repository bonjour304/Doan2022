const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use(authController.protect);

router
    .route('/signup')
    .post(authController.restrictTo('admin'), authController.signup);

router.patch(
    '/updateMyPassword',
    authController.restrictTo('admin', 'developer'),
    authController.updatePassword
);
//Get ME route, using getMe() to attach the ID for getUser()
router
    .route('/me')
    .get(userController.getMe, userController.getUser)
    .patch(userController.updateMe)
    .delete(userController.deleteMe);

router
    .route('/')
    .get(authController.restrictTo('admin'), userController.getAllUsers)
    .post(authController.restrictTo('admin'), userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .patch(authController.restrictTo('admin'), userController.updateUser)
    .delete(authController.restrictTo('admin'), userController.deleteUser);

module.exports = router;