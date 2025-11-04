import { describe, it, expect } from 'vitest';
import {
  keys,
  entries,
  isEmptyObject,
  deepClone,
} from '../../../src/utils/object.ts';

describe('object utilities', () => {
  describe('keys', () => {
    it('should return typed keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = keys(obj);
      expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should handle empty objects', () => {
      expect(keys({})).toEqual([]);
    });
  });

  describe('entries', () => {
    it('should return typed entries', () => {
      const obj = { a: 1, b: 2 };
      const result = entries(obj);
      expect(result).toEqual([
        ['a', 1],
        ['b', 2],
      ]);
    });

    it('should handle empty objects', () => {
      expect(entries({})).toEqual([]);
    });
  });

  describe('isEmptyObject', () => {
    it('should return true for empty objects', () => {
      expect(isEmptyObject({})).toBe(true);
    });

    it('should return false for non-empty objects', () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
      expect(isEmptyObject({ a: 1, b: 2 })).toBe(false);
    });
  });

  describe('deepClone', () => {
    it('should create a deep clone', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);

      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });

    it('should clone arrays', () => {
      const arr = [1, 2, [3, 4]];
      const cloned = deepClone(arr);

      expect(cloned).toEqual(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned[2]).not.toBe(arr[2]);
    });
  });
});
