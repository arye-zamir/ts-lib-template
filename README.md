# ts-types-lib-template

A template for building TypeScript types-only libraries. This project is designed to be a starting point for creating libraries that provide only type definitions without any runtime code, making it ideal for type safety in larger TypeScript projects.

## Getting Started

### Prerequisites

- Node.js (v22.11.0 or higher, LTS)
- pnpm

### Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/yourusername/ts-types-lib-template.git
$ cd ts-types-lib-template
$ pnpm install
```

### Development

To develop and extend the library, add or modify the types in the src directory.

### Build

To build the project and generate type definitions:

```bash
$ pnpm run build
```

This will clean the dist directory and compile the TypeScript files to .d.ts files in the dist folder.

### Scripts

- `pnpm clean`: Deletes the dist directory to ensure a clean build.

- `pnpm build`: Cleans the dist directory and generates the latest type definitions.

## License

This project is licensed under the MIT License.

### Contributing

Feel free to submit issues or pull requests for improvements. Contributions are welcome!
