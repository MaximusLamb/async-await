const request = require('superagent');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
      }
    });
  }
}));

const getCharacter = async(id) => {
  const { body } = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  return {
    name: body.name,
    status: body.status,
    species: body.species
  };
};

describe('rick and morty api functions', () => {

  it('can get a rick and morty character', async() => {
    const step1 = await getCharacter();
    expect(step1).toEqual({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
    });
  });
});
