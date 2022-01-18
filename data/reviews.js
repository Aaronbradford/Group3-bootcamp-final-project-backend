const casual = require('casual')

const userData = require('./songs')

casual.define('review', ({ songId, userId }) => ({
  id: casual.uuid,
  song_id: songId,
  rating: casual.random,
  review: casual.short_description,
  genre: casual.string,
  rated_at: casual.moment,
  rating_user_id: userId,
}))

const songData = []

for (let i = 0; i < 20; ++i) {
  const songId = casual.random_element(songData).id
  const userId = casual.random_element(userData).id
  songData.push(casual.review({ songId, userId }))
}

module.exports = songData
