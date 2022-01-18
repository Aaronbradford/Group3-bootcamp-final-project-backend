const reviewData = require('../../../data/reviews')

exports.seed = knex => knex('reviews').del()
  .then(() => knex('reviews').insert(reviewData))
