/*! .lintstagedrc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://github.com/okonet/lint-staged) */

module.exports = {
  '*.js': ['standard --fix', 'git add'],
  '*.json': ['prettier --parser json --write', 'git add'],
  '*.{yml,yaml}': ['prettier --parser yaml --write', 'git add'],
  '*.md': ['prettier --parser markdown --write', 'git add'],
  '*.html': ['prettier --parser html --write', 'git add']
}
