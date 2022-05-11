# Flatirons Fuse Angular Example

This is a sample Angular project for [Flatirons Fuse](https://flatironsdevelopment.com/products/fuse/).
The full documentation for Fuse can be [found here](https://fuse-docs.flatironsdevelopment.com/).

### Running the app

Requires updating tsconfig.json with

```
"strict": false,
"allowSyntheticDefaultImports": true,
```

and running

```
yarn
yarn add @types/styled-components @types/react
yarn start
```

Example for using importer in **src/app/app.component.ts**

- using importer with CDN requires adding:
  `<script src="https://unpkg.com/fuse-importer@0.18.0"></script>`
  to index.html in the root
