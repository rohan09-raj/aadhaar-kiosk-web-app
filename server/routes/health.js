import Express from 'express';
import health from '../controllers/health.js';

const router = Express.Router();

router.get('/health', health.healthCheck);

export default router;
