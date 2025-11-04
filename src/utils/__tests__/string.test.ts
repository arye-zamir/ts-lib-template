import { describe, it, expect } from 'vitest';
import { isNull, numToString } from '../string.ts';

describe('isNull', () => {
  it('should return true for null values', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false for non-null values', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
  });
});

describe('numToString', () => {
  it('should convert number to string', () => {
    expect(numToString(42)).toBe('42');
    expect(numToString(0)).toBe('0');
    expect(numToString(-100)).toBe('-100');
    expect(numToString(3.14)).toBe('3.14');
  });

  it('should return null when input is null', () => {
    expect(numToString(null)).toBe(null);
  });

  it('should handle edge cases', () => {
    expect(numToString(NaN)).toBe('NaN');
    expect(numToString(Infinity)).toBe('Infinity');
    expect(numToString(-Infinity)).toBe('-Infinity');
  });
});
