# Ensure Module
Similar to yeoman, tiny build system for modules that use handlebars templates

## Example

```JavaScript

ensureModule(
  src, // path to template module directory (ex. my-templates/fancy-promise-module/)
  dest, // new module path, generally ./my_modules/my-needed-module to reference target location
  data, // contains name, description, author, dependencies, etc...
);

```

## Notes
It only ensures existence, it will not override existing data.
