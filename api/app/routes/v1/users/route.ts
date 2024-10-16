import { Router } from 'express';
import { getAll, getById, add, update, removeOne, getByWalletAddress, addByWallet } from './controller';

const router = Router();
router.route('/').get(getAll).post(add);
router.route('/wallet').post(addByWallet);
router.route('/:id/wallet-address').get(getByWalletAddress);
router.route('/:id').get(getById).patch(update).delete(removeOne);

export default router;
