// region Nullable Types
export type Nullable<T> = T | null;
export type NullString = Nullable<string>;
export type NullNumber = Nullable<number>;
export type NullBoolean = Nullable<boolean>;
export type NullDate = Nullable<Date>;
export type NullObject = Nullable<Record<string, unknown>>;

export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;
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

// region Result/Either Pattern
export type Success<T> = {
  readonly success: true;
  readonly value: T;
};

export type Failure<E> = {
  readonly success: false;
  readonly error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;
// endregion

// region Branded Types
declare const brand: unique symbol;

export type Brand<T, TBrand extends string> = T & {
  readonly [brand]: TBrand;
};

export type UserId = Brand<string, 'UserId'>;
export type Email = Brand<string, 'Email'>;
export type PositiveNumber = Brand<number, 'PositiveNumber'>;
// endregion

// region Utility Types
export type NonEmptyArray<T> = [T, ...T[]];

export type AtLeastOne<T> = [T, ...T[]];

export type Awaitable<T> = T | Promise<T>;

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
// endregion
