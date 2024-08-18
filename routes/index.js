import express from 'express';
import userController from '../controllers/userController.js';
import authenticateUser from '../middleware/authenticatorMiddleware.js';

const router = express.Router();

// router.get('/', (request, response) => {
//   return response.send("Olá mundo!");
// });

router.get('/user', authenticateUser)

// User Routes
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.post('/user', userController.createUser);
router.delete('/user/:id', userController.deleteUser);

export default router;
