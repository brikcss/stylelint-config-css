# Roadmap

## In Progress

- [ ] Test different commit types to make sure it works as expected.

## Upcoming / Committed

- [ ] Create `brik init` command to create a new component (with EJS?). This would negate the need for `pretask-check.sh`.
- [ ] Create [shareable eslint config](https://eslint.org/docs/developer-guide/shareable-configs).
- [ ] Create [shareable stylelint config](https://github.com/stylelint/stylelint-config-standard), and update as follows:
	- [ ] Add stylelint-validator to validate css declarations.
	- [ ] Check css images with https://github.com/ramasilveyra/stylelint-images.
	- [ ] Enforce variables for certain property values with https://github.com/simonsmith/stylelint-selector-bem-pattern.
	- [ ] Add BEM linter (https://github.com/simonsmith/stylelint-selector-bem-pattern).
	- [ ] Disallow features not supported by target browsers (https://github.com/ismay/stylelint-no-unsupported-browser-features).
	- [ ] Add html/md/vue processing with https://github.com/gucong3000/postcss-html.
	- [ ] Add precommit hook? (https://github.com/awebdeveloper/pre-commit-stylelint)
- [ ] Create shareable postcss config, if possible.
- [ ] Create package for UI testing with [puppeteer](https://github.com/GoogleChrome/puppeteer), [img-diff-js](https://www.npmjs.com/package/img-diff-js) / [pixelmatch](https://www.npmjs.com/package/pixelmatch), and a test assertion library.

## Considering / Not Committed
