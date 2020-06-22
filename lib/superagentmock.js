
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
