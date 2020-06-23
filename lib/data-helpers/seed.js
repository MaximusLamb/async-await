const chance = require('chance').Chance();
const Movie = require('../models/Movie');
// const Review = require('../models/Review');

const seed = async(input = { movieAmount: 5, reviewAmount: 100 }) => {
  const movieArray = await Promise.all([...Array(input.movieAmount)].map(() => {
    return Movie.create({
      title: chance.sentence({ length: 3 }),
      description: chance.sentence({ length: 12 }),
      studio: chance.sentence({ length: 2 })
    });

  }));
  return movieArray;
};

module.exports = {
  seed
};
