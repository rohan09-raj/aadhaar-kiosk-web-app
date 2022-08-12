import Express from 'express';
import users from '../controllers/users.js';

const router = Express.Router();

router.post('/user', users.createUser);
router.get('/user/:id', users.getUser);
router.get('/verifiedusers', users.getVerifiedUsers);
router.get('/unverifiedusers', users.getUnverifiedUsers);

export default router;
