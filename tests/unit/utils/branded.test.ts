import { describe, it, expect } from 'vitest';
import {
  createUserId,
  createEmail,
  createPositiveNumber,
} from '../../../src/utils/branded.ts';

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
