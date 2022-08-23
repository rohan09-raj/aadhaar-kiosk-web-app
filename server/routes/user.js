import Express from 'express';
import users from '../controllers/users.js';

const router = Express.Router();

router.post('/', users.createUser);
router.get('/:id', users.getUser);
router.patch('/:id', users.updateUser);
router.delete('/:id', users.deleteUser);
router.get('/aadhaar/:aadhaar', users.getUserByAadhaarNumber);

export default router;
