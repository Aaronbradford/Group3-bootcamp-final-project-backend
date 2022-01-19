const casual = require('casual')

const userData = require('./users')
const songData = require('./songs')

casual.define('review', ({ songId, userId }) => ({
  id: casual.uuid,
  song_id: songId,
  name: casual.string,
  rating: casual.random,
  review: casual.short_description,
  rated_at: casual.moment,
  rating_user_id: userId,
}))

const reviewData = []

for (let i = 0; i < 20; ++i) {
  const songId = casual.random_element(songData).id
  const userId = casual.random_element(userData).id
  reviewData.push(casual.review({ songId, userId }))
}

module.exports = reviewData
