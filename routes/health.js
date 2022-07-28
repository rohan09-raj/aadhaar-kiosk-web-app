import Express from 'express';
import {healthCheck} from '../controllers/health.js';

const router = Express.Router();

router.get('/health', healthCheck);

export default router;
