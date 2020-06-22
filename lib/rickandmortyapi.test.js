const { getCharacter, getManyCharacters } = require('./rickandmortyapi.js');


describe('rick and morty api functions', () => {

  it('can get a rick and morty character', async() => {
    const step1 = await getCharacter(1);
    expect(step1).toEqual({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
    });
  });
});

it('can get many rick and morty characters', async() => {
  const step1 = await getManyCharacters([1, 2, 3]);
  expect(step1).toEqual(
    [{ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' }, 
      { 'name': 'Morty Smith', 'species': 'Human', 'status': 'Alive' },
      { 'name': 'Summer Smith', 'species': 'Human', 'status': 'Alive' }]
  );
}
);
