const path = require("path");

const getFilePaths = (filenames) => {
  const currentDirectory = process.cwd();
  return filenames
    .map((filename) => path.relative(currentDirectory, filename))
    .join(" ");
};

const checkFiles = () => "yarn tsc --noEmit";
const lintFiles = (filenames) => `yarn eslint --fix ${getFilePaths(filenames)}`;
const prettierFiles = (filenames) =>
  `yarn prettier --write ${getFilePaths(filenames)}`;

module.exports = {
  "**/*.(ts|tsx)": [checkFiles],
  "**/*.(js|jsx|ts|tsx)": [lintFiles, prettierFiles],
  "**/*.(json|md)": [prettierFiles],
};
