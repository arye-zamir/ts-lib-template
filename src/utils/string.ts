import type { NullNumber, NullString } from '../types';

export const isNull = (value: any): boolean => value === null;

export const numToString = (value: NullNumber): NullString => {
  if (isNull(value)) {
    return null;
  }
  return String(value);
};
