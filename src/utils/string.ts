import type { NullNumber, NullString } from '../types/index.ts';

/**
 * Type guard that checks if a value is null
 * @param value - The value to check
 * @returns True if the value is null, false otherwise
 */
export const isNull = <T>(value: T | null): value is null => value === null;

/**
 * Converts a number to a string, preserving null values
 * @param value - The number to convert, or null
 * @returns The string representation of the number, or null if input is null
 * @example
 * ```ts
 * numToString(42) // "42"
 * numToString(null) // null
 * ```
 */
export const numToString = (value: NullNumber): NullString => {
  if (isNull(value)) {
    return null;
  }
  return String(value);
};

/**
 * Checks if a string is empty or contains only whitespace
 * @param value - The string to check
 * @returns True if the string is empty or whitespace-only
 */
export const isEmpty = (value: string): boolean => value.trim().length === 0;

/**
 * Capitalizes the first letter of a string
 * @param value - The string to capitalize
 * @returns The capitalized string
 */
export const capitalize = (value: string): string => {
  if (isEmpty(value)) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};
