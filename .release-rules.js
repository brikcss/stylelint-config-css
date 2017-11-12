/**
 * .release-rules.js
 * -----------------
 * @author brikcss
 * @homepage https://github.com/brikcss
 * @description Configuration for [release rules](https://github.com/semantic-release/commit-analyzer/).
 * ---------------------------------------------------------------------
 */


const breakingChangesRegex = /BREAKING/;

module.exports = [
	{
		breaking: true,
		release: 'major'
	}, {
		scope: 'BREAKING',
		release: 'major'
	}, {
		scope: 'MINOR',
		release: 'minor'
	}, {
		scope: 'PATCH',
		release: 'patch'
	}, {
		type: 'feat',
		release: 'minor'
	}, {
		type: 'feature',
		release: 'minor'
	}, {
		type: 'docs',
		release: 'patch'
	}, {
		type: 'fix',
		release: 'patch'
	}, {
		type: 'perf',
		release: 'patch'
	}, {
		type: 'performance',
		release: 'patch'
	}, {
		type: 'refactor',
		release: 'patch'
	}, {
		type: 'revert',
		release: 'patch'
	}, {
		type: 'style',
		release: 'patch'
	}
];
