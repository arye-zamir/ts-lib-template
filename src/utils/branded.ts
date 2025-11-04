import type { UserId, Email, PositiveNumber } from '../types/index.ts';

/**
 * Creates a branded UserId from a string
 * @param id - The user ID string
 * @returns A branded UserId
 */
export const createUserId = (id: string): UserId => id as UserId;

/**
 * Creates a branded Email from a string
 * @param email - The email string
 * @returns A branded Email
 */
export const createEmail = (email: string): Email => email as Email;

/**
 * Creates a branded PositiveNumber from a number
 * @param n - The number to validate and brand
 * @returns A branded PositiveNumber if positive, null otherwise
 */
export const createPositiveNumber = (n: number): PositiveNumber | null =>
  n > 0 ? (n as PositiveNumber) : null;
