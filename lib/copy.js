const fsPromises = require('fs').promises;

const copyFile = async(src, dst) => {
  const fileContents = await fsPromises.readFile(src, { encoding: 'utf8' });
  await fsPromises.writeFile(dst, fileContents);
  return fileContents;
};

const transformFile = async(src) => {
  const step1 = await fsPromises.readFile(src, { encoding: 'utf8' });
  const step2 = await step1.split('');
  const step3 = await step2.filter(letter => letter === letter.toLowerCase());
  const step4 = await step3.reverse();
  const step5 = await step4.join('');
  const step6 = await step5.toUpperCase();
  return step6;
};

module.exports = {
  copyFile,
  transformFile
};
