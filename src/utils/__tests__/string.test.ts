import { describe, it, expect } from 'vitest';
import {
  isNull,
  numToString,
  isEmpty,
  capitalize,
} from '../string.ts';

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

describe('isEmpty', () => {
  it('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for whitespace-only strings', () => {
    expect(isEmpty(' ')).toBe(true);
    expect(isEmpty('  ')).toBe(true);
    expect(isEmpty('\t')).toBe(true);
    expect(isEmpty('\n')).toBe(true);
    expect(isEmpty(' \t\n ')).toBe(true);
  });

  it('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(' hello ')).toBe(false);
    expect(isEmpty('a')).toBe(false);
  });
});

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('typescript')).toBe('Typescript');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('WORLD');
  });

  it('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  it('should return empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('should return whitespace for whitespace-only input', () => {
    expect(capitalize(' ')).toBe(' ');
    expect(capitalize('  ')).toBe('  ');
  });

  it('should handle strings with numbers and special characters', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('!hello')).toBe('!hello');
  });
});
