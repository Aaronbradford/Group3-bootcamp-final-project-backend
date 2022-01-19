const casual = require('casual')

casual.define('song', () => ({
  id: casual.uuid,
  name: casual.string,
  artist: casual.name,
  genre: casual.string,
}))

const songData = []

for (let i = 0; i < 20; ++i) {
  songData.push(casual.song)
}

module.exports = songData
