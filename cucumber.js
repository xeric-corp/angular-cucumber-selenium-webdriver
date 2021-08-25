let common = [
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require features/support/**/*.ts',
  '--format progress-bar',
  '--publish-quiet'
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
