import Express from 'express';
import users from '../controllers/users.js';

const router = Express.Router();

router.post('/', users.createUser);
router.get('/:id', users.getUser);
router.patch('/:id', users.updateUser);
router.delete('/:id', users.deleteUser);

router.get('/aadhaar/:aadhaar', users.getUserByAadhaarNumber);
router.get('/verified', users.getVerifiedUsers);
router.get('/unverified', users.getUnverifiedUsers);
router.get('/updating', users.getUpdatingUsers);

export default router;
