const BaseModel = require('./BaseModel')

class Review extends BaseModel {
  static get tableName() {
    return 'reviews'
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

module.exports = Review
