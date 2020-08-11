const Knex = require('knex');

exports.up = async function (knex = Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.string('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

exports.down = async function (knex = Knex) {
  return knex.schema.dropTable('classes');
}