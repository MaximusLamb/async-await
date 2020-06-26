const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');

const seed = async({ movieAmount = 5, reviewAmount = 100 } = {}) => {
  const movieArray = await Promise.all([...Array(movieAmount)].map(() => {
    return Movie.create({
      title: chance.sentence({ length: 3 }),
      description: chance.sentence({ length: 12 }),
      studio: chance.sentence({ length: 2 })
    });
  }));
  await Promise.all([...Array(reviewAmount)].map(() => {
    return Review.create({
      movie: chance.pickone(movieArray)._id,
      authorName: chance.name(),
      comment: chance.sentence({ length: 12 })
    });
  }));
};

module.exports = {
  seed
};
