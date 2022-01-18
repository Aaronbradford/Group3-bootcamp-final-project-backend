const casual = require('casual')

casual.define('song', () => ({
  id: casual.uuid,
  name: casual.name,
  artist: casual.name,
  genre: casual.name,
}))

const songData = []

for (let i = 0; i < 20; ++i) {
  songData.push(casual.song)
}

module.exports = songData
