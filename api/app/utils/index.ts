import transaction from './transaction';
import generateAccess from './generateAccess';
import generateToken from './generateToken';
import generateRefresh from './generateRefresh';
import getFilterQuery from './getFilterQuery';

import { NETWORK } from '../env/web3';

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

export { getFilterQuery, generateAccess, generateToken, generateRefresh, transaction };
