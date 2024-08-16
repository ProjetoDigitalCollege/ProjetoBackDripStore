const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateUser = require('../middleware/authMiddleware');

// User routes
router.get('/user', authenticateUser, userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user/:id', userController.updateUser);
router.put('/user/', userController.createUser);
router.delete('/user/:id', userController.deleteUser);

// Product routes

module.exports = router;