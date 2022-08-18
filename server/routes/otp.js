import Express from 'express';
import otp from '../controllers/otp';

const router = Express.Router();

router.post('/otp', otp.sendOTP);

export default router;
