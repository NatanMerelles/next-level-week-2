const Knex = require('knex');

exports.up = async function (knex = Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamp('create_at')
      .defaultTo('now()')
      .notNullable();
  });
}

exports.down = async function (knex = Knex) {
  return knex.schema.dropTable('connections');
}