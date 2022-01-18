const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'songs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('name')
    .notNullable()

  table
    .string('artist')
    .notNullable()

  table.string('genre').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('songs')
