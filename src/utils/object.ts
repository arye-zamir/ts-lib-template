/**
 * Type-safe Object.keys that preserves key types
 * @param obj - The object to get keys from
 * @returns Array of object keys with proper typing
 */
export const keys = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};

/**
 * Type-safe Object.entries that preserves types
 * @param obj - The object to get entries from
 * @returns Array of [key, value] tuples with proper typing
 */
export const entries = <T extends object>(
  obj: T
): Array<[keyof T, T[keyof T]]> => {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
};

/**
 * Checks if an object is empty (has no own properties)
 * @param obj - The object to check
 * @returns True if the object has no own properties
 */
export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Creates a deep clone of an object using structured clone
 * @param obj - The object to clone
 * @returns A deep clone of the object
 */
export const deepClone = <T>(obj: T): T => {
  return structuredClone(obj);
};
