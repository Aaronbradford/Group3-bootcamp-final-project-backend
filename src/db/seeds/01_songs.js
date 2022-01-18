const songData = require('../../../data/songs')

exports.seed = knex => knex('songs').del()
  .then(() => knex('songs').insert(songData))
