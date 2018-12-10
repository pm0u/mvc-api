exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('type').notNullable()
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));`
      )
    })

}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks')
}
