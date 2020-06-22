const fsPromises = require('fs').promises;

const copyFile = async(src, dst) => {
  const fileContents = await fsPromises.readFile(src, { encoding: 'utf8' });
  await fsPromises.writeFile(dst, fileContents);
  return fileContents;
};

module.exports = {
  copyFile
};
