const request = require('superagent');

describe('rick and morty api functions', () => {

  const getCharacter = async(id) => {
    const { body } = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
    return {
      name: body.name,
      status: body.status,
      species: body.species
    };
  };

  const getManyCharacters = (nameArray) => {
    return Promise.all(
      nameArray
        .map(item => getCharacter(item))
    );
  };
  

  it('can get many rick and morty characters', async() => {
    const step1 = await getManyCharacters([1, 2, 3]);
    expect(step1).toEqual(
      [{ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' }, 
        { 'name': 'Morty Smith', 'species': 'Human', 'status': 'Alive' },
        { 'name': 'Summer Smith', 'species': 'Human', 'status': 'Alive' }]
    );
  }
  );
});
