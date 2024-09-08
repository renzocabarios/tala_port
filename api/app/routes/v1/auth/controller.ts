import usersService from '../users/service';
import { generateAccess, verifySignature } from '../../../utils/index';
import { Request, Response } from 'express';

const authByWallet = async (_req: Request, _res: Response) => {
  const { walletAddress, signature } = _req.body;

  const verified = verifySignature(signature, walletAddress);

  if (!verified) {
    _res.send({
      data: [],
      status: 'fail',
      message: 'Get user failed',
      meta: {
        access: generateAccess({}),
      },
    });
    return;
  }

  const data = await usersService.getOne({ walletAddress });

  if (!data) {
    _res.send({
      data: [],
      status: 'fail',
      message: 'Get user failed',
      meta: {
        access: generateAccess({}),
      },
    });
    return;
  }

  _res.send({
    data: [data],
    status: 'success',
    message: 'Get user success',
    meta: {
      access: generateAccess({}),
    },
  });
};

export { authByWallet };
