/**
 * postcss.config.js
 * -----------------
 * @author brikcss
 * @homepage https://github.com/brikcss
 * @description Configuration object for [postcss](https://github.com/postcss/postcss).
 * ---------------------------------------------------------------------
 */


// eslint-disable-next-line
module.exports = (context) => {
	// This config was created solely for linting via postcss-cli. We also run postcss inside of `sass-compile.js`, but that does not use this config.
	const isProd = context.env === 'prod' || context.env === 'production' || process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';

	return {
		map: context.options.map,
		plugins: [
			require('stylelint')(),
			require('postcss-reporter')({
				clearReportedMessages: true,
				throwError: isProd
			})
		],
		syntax: require('postcss-scss')
	};
};
