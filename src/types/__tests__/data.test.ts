import { describe, it, expect } from 'vitest';
import {
  success,
  failure,
  createUserId,
  createEmail,
  createPositiveNumber,
} from '../data.ts';

describe('Result pattern', () => {
  describe('success', () => {
    it('should create a success result', () => {
      const result = success(42);
      expect(result).toEqual({
        success: true,
        value: 42,
      });
    });

    it('should handle different value types', () => {
      expect(success('hello')).toEqual({ success: true, value: 'hello' });
      expect(success({ foo: 'bar' })).toEqual({
        success: true,
        value: { foo: 'bar' },
      });
      expect(success([1, 2, 3])).toEqual({ success: true, value: [1, 2, 3] });
    });

    it('should type guard correctly', () => {
      const result = success(100);
      if (result.success) {
        expect(result.value).toBe(100);
      }
    });
  });

  describe('failure', () => {
    it('should create a failure result', () => {
      const error = new Error('Something went wrong');
      const result = failure(error);
      expect(result).toEqual({
        success: false,
        error,
      });
    });

    it('should handle different error types', () => {
      expect(failure('string error')).toEqual({
        success: false,
        error: 'string error',
      });
      expect(failure({ code: 404 })).toEqual({
        success: false,
        error: { code: 404 },
      });
    });

    it('should type guard correctly', () => {
      const result = failure('error');
      if (!result.success) {
        expect(result.error).toBe('error');
      }
    });
  });
});

describe('Branded types', () => {
  describe('createUserId', () => {
    it('should create a UserId from string', () => {
      const userId = createUserId('user-123');
      expect(userId).toBe('user-123');
    });

    it('should handle different string formats', () => {
      expect(createUserId('123')).toBe('123');
      expect(createUserId('uuid-abc-def')).toBe('uuid-abc-def');
      expect(createUserId('')).toBe('');
    });
  });

  describe('createEmail', () => {
    it('should create an Email from string', () => {
      const email = createEmail('test@example.com');
      expect(email).toBe('test@example.com');
    });

    it('should handle different email formats', () => {
      expect(createEmail('user@domain.com')).toBe('user@domain.com');
      expect(createEmail('a@b.c')).toBe('a@b.c');
    });
  });

  describe('createPositiveNumber', () => {
    it('should create a PositiveNumber for positive values', () => {
      expect(createPositiveNumber(1)).toBe(1);
      expect(createPositiveNumber(100)).toBe(100);
      expect(createPositiveNumber(0.1)).toBe(0.1);
    });

    it('should return null for zero', () => {
      expect(createPositiveNumber(0)).toBe(null);
    });

    it('should return null for negative numbers', () => {
      expect(createPositiveNumber(-1)).toBe(null);
      expect(createPositiveNumber(-100)).toBe(null);
    });

    it('should handle edge cases', () => {
      expect(createPositiveNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
      expect(createPositiveNumber(Infinity)).toBe(Infinity);
      expect(createPositiveNumber(-Infinity)).toBe(null);
    });
  });
});
