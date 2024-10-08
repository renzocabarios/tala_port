import service from './service';
import { transaction, generateAccess, getFilterQuery } from '../../../utils/index';
import { startSession, ClientSession } from 'mongoose';
import { Request, Response } from 'express';
import nacl from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';
import { decodeUTF8, decodeBase64 } from 'tweetnacl-util';
import bcrypt from 'bcrypt';
import ENV from '../../../env/index';

const getAll = async (_req: Request, _res: Response) => {
  const { page = 1, limit = 10, populate = '' } = _req.query;
  const filter = getFilterQuery(_req.query.filter);
  const data = await service.getAll({
    filter,
    page: Number(page),
    limit: Number(limit),
    populate: populate.toString(),
  });

  const max = await service.getMaxCount({ filter });

  _res.send({
    data,
    status: 'success',
    message: 'Get user success',
    meta: {
      access: generateAccess({}),
      page,
      limit,
      max,
    },
  });
};

const getByWalletAddress = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const session: ClientSession = await startSession();

  _res.send(
    await transaction(
      session,
      async () => {
        return await service.update(
          { walletAddress: id },
          { $set: { image: 'default.png', username: id.slice(-11), walletAddress: id } },
          { session, new: true, upsert: true },
        );
      },
      'Create user',
    ),
  );
};

const getById = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({
    data: [data],
    status: 'success',
    message: 'Get user success',
    meta: {
      access: generateAccess({}),
    },
  });
};

const add = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { password, ...res } = _req.body;
  const hashed = await bcrypt.hash(password, ENV.HASH_SALT);
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.add({ password: hashed, ...res }, session);
      },
      'Create user',
    ),
  );
};

const addByWallet = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { walletAddress, signature } = _req.body;

  _res.send(
    await transaction(
      session,
      async () => {
        const message = 'The quick brown fox jumps over the lazy dog';
        const messageBytes = decodeUTF8(message);
        const signatureDecoded = decodeBase64(signature) as Uint8Array;

        const verified = nacl.sign.detached.verify(
          messageBytes,
          signatureDecoded,
          new PublicKey(walletAddress).toBytes(),
        );

        if (!verified) {
          throw Error();
        }

        return await service.add(
          {
            lastName: walletAddress.slice(0, 11),
            firstName: walletAddress.slice(-11),
            walletAddress,
          },
          { session },
        );
      },
      'Create user',
    ),
  );
};

const update = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { id } = _req.params;
  const { password, ...res } = _req.body;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.update({ _id: id }, res, { session, new: true });
      },
      'Update user',
    ),
  );
};

const removeOne = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();

  const { id } = _req.params;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.removeOne({ _id: id }, { session, new: true });
      },
      'Delete user',
    ),
  );
};

export { getAll, getById, add, update, removeOne, getByWalletAddress, addByWallet };
