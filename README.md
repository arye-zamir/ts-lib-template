# typescript-library-template

A template for building TypeScript libraries. developers create reusable libraries with clear runtime exports and type safety in larger TypeScript projects.

## Getting Started

### Prerequisites

- Node.js (v22.11.0 or higher, LTS)
- pnpm

### Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/arye-zamir/ts-lib-template.git
$ cd ts-lib-template
$ pnpm install
```

### Development

To develop and extend the library, add or modify the files in the src directory.

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
