import { describe, it, expect } from 'vitest';
import { success, failure } from '../../../src/utils/result.ts';

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
