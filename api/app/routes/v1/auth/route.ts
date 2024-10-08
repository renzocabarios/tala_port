import { Router } from 'express';
import { authByWallet, authenticate } from './controller';

const router = Router();
router.route('/wallet').post(authByWallet);
router.route('/').post(authenticate);

export default router;
