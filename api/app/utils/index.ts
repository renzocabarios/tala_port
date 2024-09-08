import transaction from './transaction';
import generateAccess from './generateAccess';
import generateToken from './generateToken';
import generateRefresh from './generateRefresh';
import getFilterQuery from './getFilterQuery';
import nacl from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';
import { decodeUTF8, decodeBase64 } from 'tweetnacl-util';

export function generateRandomSalt(min: number = 100_000_000_000, max: number = 999_999_999_999) {
  // if (NETWORK === 'SKYSHARES' || NETWORK === 'SEPOLIA') {
  //   return 1;
  // }

  return Number((Math.random() * (max - min) + min).toFixed(0));
}

export function generateUniqueTwoDigitNumbers(numbers: Set<string> = new Set<string>()) {
  // if (NETWORK === 'SKYSHARES' || NETWORK === 'SEPOLIA') {
  //   return ['00', '11', '22', '33'];
  // }

  if (numbers.size < 4) {
    let number = Math.floor(Math.random() * 90) + 10;
    const temp = numbers.add(number.toString().padStart(2, '0'));
    generateUniqueTwoDigitNumbers(temp);
  }
  return Array.from(numbers);
}
export function verifySignature(signature: string, walletAddress: string) {
  const message = 'The quick brown fox jumps over the lazy dog';
  const messageBytes = decodeUTF8(message);
  const signatureDecoded = decodeBase64(signature) as Uint8Array;

  return nacl.sign.detached.verify(messageBytes, signatureDecoded, new PublicKey(walletAddress).toBytes());
}

export { getFilterQuery, generateAccess, generateToken, generateRefresh, transaction };
