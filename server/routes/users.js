import Express from 'express';
import users from '../controllers/users.js';

const router = Express.Router();

router.get('/verified', users.getVerifiedUsers);
router.get('/unverified', users.getUnverifiedUsers);
router.get('/updating', users.getUpdatingUsers);

export default router;
