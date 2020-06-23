const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../utils/connect');
const { seed } = require('./seed');
const Movie = require('../models/Movie');
const Review = require('../models/Review');

describe('movie tests', () => {

  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });


  it('creates 5 movies', async() => {
    await seed();
    expect(await Movie.find()).toHaveLength(5);
  });

  it('creates 100 reviews', async() => {
    await seed();
    expect(await Review.find()).toHaveLength(100);
  });

  it('other test', async() => {
    await seed({ movieAmount: 20, reviewAmount: 1 });
    expect(await Movie.find()).toHaveLength(20);
    expect(await Review.find()).toHaveLength(1);
  });
});
