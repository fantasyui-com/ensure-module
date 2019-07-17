# Ensure Module
Similar to yeoman, a build system for modules.

## Example

```JavaScript

ensureModule(
  src, // path to template module, generally __dirname to reference modules stored in ensure
  dest, // new module path, generally ./your_modules/your-module to reference target location
  dataObject, // contains name, description, author, dependencies, etc...
);

```
