import type { Success, Failure } from '../types/index.ts';

/**
 * Creates a successful result
 * @param value - The success value
 * @returns A Success result
 * @example
 * ```ts
 * const result = success(42);
 * if (result.success) {
 *   console.log(result.value); // 42
 * }
 * ```
 */
export const success = <T>(value: T): Success<T> => ({
  success: true,
  value,
});

/**
 * Creates a failure result
 * @param error - The error value
 * @returns A Failure result
 * @example
 * ```ts
 * const result = failure(new Error('Failed'));
 * if (!result.success) {
 *   console.error(result.error);
 * }
 * ```
 */
export const failure = <E>(error: E): Failure<E> => ({
  success: false,
  error,
});
