// region Data Types
export type Nullable<T> = T | null;
export type NullString = Nullable<string>;
export type NullNumber = Nullable<number>;
export type NullBoolean = Nullable<boolean>;
export type NullDate = Nullable<Date>;
export type NullObject = Nullable<Record<string, unknown>>;

// endregion

// region Safe Types

export type SafeValue =
  | NullString
  | NullNumber
  | NullBoolean
  | NullDate
  | NullObject;

export type SafeObject = Record<string, SafeValue>;

export type RawDataConverter<T, U> = (data: T) => U;
export type DataConverter<T> = RawDataConverter<unknown, T>;

// endregion
