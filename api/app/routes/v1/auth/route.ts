import { Router } from 'express';
import { authByWallet } from './controller';

const router = Router();
router.route('/wallet').post(authByWallet);

export default router;
