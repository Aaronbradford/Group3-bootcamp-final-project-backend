const BaseModel = require('./BaseModel')
const Review = require('./Review.js')

class Song extends BaseModel {
  static get tableName() {
    return 'songs'
  }

  static get relationMappings() {
    return {
      reviews: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Review,
        join: {
          from: 'songs.id',
          through: {
            from: 'reviews.song_id',
            to: 'reviews.review',
          },
          to: 'songs.id',
        },
      },
    }
  }
}

module.exports = Song
