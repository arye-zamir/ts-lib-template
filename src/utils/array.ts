/**
 * Checks if an array is empty
 * @param arr - The array to check
 * @returns True if the array is empty
 */
export const isEmptyArray = <T>(arr: T[]): arr is [] => arr.length === 0;

/**
 * Returns the last element of an array
 * @param arr - The array to get the last element from
 * @returns The last element, or undefined if array is empty
 */
export const last = <T>(arr: T[]): T | undefined => arr[arr.length - 1];

/**
 * Returns the first element of an array
 * @param arr - The array to get the first element from
 * @returns The first element, or undefined if array is empty
 */
export const first = <T>(arr: T[]): T | undefined => arr[0];

/**
 * Chunks an array into smaller arrays of specified size
 * @param arr - The array to chunk
 * @param size - The size of each chunk
 * @returns An array of chunks
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size <= 0) throw new Error('Chunk size must be positive');
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/**
 * Removes duplicate values from an array
 * @param arr - The array to deduplicate
 * @returns A new array with unique values
 */
export const unique = <T>(arr: T[]): T[] => Array.from(new Set(arr));
