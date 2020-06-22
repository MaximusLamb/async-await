const copy = require('./copy');

const { copyFile } = require('./copy');
const fsPromises = require('fs').promises;

describe('copy function', () => {

  beforeAll(() => {
    return fsPromises.writeFile('./howdy.txt', 'Howdy Pardner');
  });

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./howdy.txt'),
      fsPromises.unlink('./howdy-copy.txt')
    ]);
  });

  it('copies a file', async() => {
    const step1 = await copyFile('./howdy.txt', './howdy-copy.txt');
    const step2 = await fsPromises.readFile('./howdy-copy.txt', { encoding: 'utf8' });
    expect(step1).toEqual(step2);
  });
});
