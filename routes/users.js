import Express from 'express';
import users from '../controllers/users.js';

const router = Express.Router();

router.post('/user', users.createUser);
router.get('/user/:id', users.getUser);
router.get('/user/aadhaar/:aadhaar', users.getUserByAadhaarNumber);
router.get('/verifiedusers', users.getVerifiedUsers);
router.get('/unverifiedusers', users.getUnverifiedUsers);

router.patch('/user/:id', users.updateUser);
router.delete('/user/:id', users.deleteUser);

export default router;
