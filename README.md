# Brikcss Component

[![npm (scoped)](https://img.shields.io/npm/v/@brikcss/component.svg?style=flat-square)](https://www.npmjs.com/package/@brikcss/component
) [![npm (scoped)](https://img.shields.io/npm/dm/@brikcss/component.svg?style=flat-square)](https://www.npmjs.com/package/@brikcss/component
) [![Travis branch](https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master)](https://github.com/brikcss/component/tree/master
) [![Travis branch](https://img.shields.io/travis/rust-lang/rust/dev.svg?style=flat-square&label=dev)](https://github.com/brikcss/component/tree/dev
) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/
) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release
) [![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://choosealicense.com/licenses/mit/)

> A scaffolding / starter repo for new brikcss components. Follow these steps to set up a new component.

<!-- MarkdownTOC -->

1. [Set up the new component repo & test](#set-up-the-new-component-repo-and-test)
1. [Update configs / root files](#update-configs--root-files)
1. [Set up dependencies](#set-up-dependencies)
1. [Build the component](#build-the-component)

<!-- /MarkdownTOC -->

<a name="set-up-the-new-component-repo-and-test"></a>
## Set up the new component repo & test

- [ ] Clone (or fork) this repo.
- [ ] Create repo in GitHub for new component.
- [ ] Configure remote branch tracking as follows:
	- [ ] _origin_: tracks the new component repo in GitHub.
	- [ ] _upstream_: tracks this scaffolding repo.

<a name="update-configs--root-files"></a>
## Update configs / root files

- [ ] `.browsersync.js`:
	- [ ] `files` property to watch build files.
	- [ ] `server` property to set the correct `baseDir` and `index` values.
	- [ ] Any other browsersync settings as desired.
- [ ] `.gitignore`.
- [ ] `.travis.yml` (scripts fields).
- [ ] `package.json`:
	- [ ] All fields with "component" to the new component name.
	- [ ] `description`.
	- [ ] `keywords`.
	- [ ] `main` and `module` with the correct entry files.
	- [ ] `release` and `publishConfig` with the correct branch/dist-tags.
	- [ ] `files` with all files necessary for a release.
	- [ ] `scripts`:
		- [ ] `prod:clean` paths (and possibly add `mkdirp` to recreate `dist` dirs?).
		- [ ] `js:watch` and `js:lint` paths.
		- [ ] `sass:watch` and `sass:lint` and `sass:dist` paths.
		- [ ] If the component will have `dist` files, or if there are any tasks you want the release process to run prior to publishing, add the following NPM script to `package.json`:
			```json
			"prepublishOnly": "npm run prod"
			```
	- [ ] `devDependencies`.
- [ ] `README.md`:
	- [ ] Update shields to show data for the new component.
	- [ ] Update the rest of `README.md` as desired.
- [ ] `webpack.config.js` to ensure it compiles the correct files / bundles.

<a name="set-up-dependencies"></a>
## Set up dependencies

- [ ] Install NPM packages with `npm install`.
- [ ] Set up [`semantic-release`](https://github.com/semantic-release/semantic-release) by running `semantic-release-cli setup`.

_Note: Semantic release will publish your first release as version `1.0.0`, there's no known way to change this. If you want to start at an earlier version (such as `0.0.1`), do the following:_

- [ ] Update the `version` in `package.json` to `0.0.1`.
- [ ] Publish your first release manually with `npm publish --tag=<tag> --access=public`.
- [ ] Update `version` in `package.json` back to `0.0.0-development`.

<a name="build-the-component"></a>
## Build the component

Directory structure:

- `src`: Original source code.
- `examples`: Code or test examples.
- `tests`: UI and unit tests.
- `dist`: Files for distribution (if any).
- `lib`: Helper scripts (i.e., NPM scripts or git hooks).
- `docs`: Documentation.
