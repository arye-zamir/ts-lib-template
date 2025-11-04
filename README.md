# typescript-library-template

Modern TypeScript library template with tsdown, Vitest, and ESLint v9.

## Features

- **tsdown** - Fast Rust-based bundler for ESM + CJS + types
- **Vitest** - Lightning-fast unit testing with coverage
- **ESLint v9** - Flat config with TypeScript support
- **Strict TypeScript** - Maximum type safety with NodeNext resolution
- **CI/CD** - GitHub Actions workflow included

## Install

```bash
pnpm install
```

## Usage

```bash
pnpm build          # Build library
pnpm dev            # Watch mode
pnpm test           # Run tests
pnpm test:coverage  # With coverage report
pnpm lint           # Check code quality
pnpm format         # Format code
```

## Examples

```ts
import { utils, success, failure } from 'typescript-library-template';

// String utilities
utils.capitalize('hello'); // "Hello"
utils.isEmpty('  '); // true

// Array utilities
utils.chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
utils.unique([1, 2, 2, 3]); // [1, 2, 3]

// Result pattern
const result = success(42);
if (result.success) {
  console.log(result.value); // 42
}
```

## License

ISC
