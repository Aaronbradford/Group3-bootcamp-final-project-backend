const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'songs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('song_id')
    .notNullable()
    .references('songs.id')

  table
    .float('rating')
    .notNullable()

  table
    .string('name')
    .notNullable()

  table
    .string('review')
    .notNullable()

  table
    .uuid('rating_user_id')
    .notNullable()
    .references('users.id')

  table.timestamp('rated_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('reviews')
