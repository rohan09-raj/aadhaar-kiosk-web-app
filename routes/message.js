import Express from 'express';
import message from '../controllers/message';

const router = Express.Router();

router.post('/otp', message.sendOTP);
router.post('/message', message.sendMessage);

export default router;
