const Knex = require('knex');

exports.up = async function (knex = Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

exports.down = async function (knex = Knex) {
  return knex.schema.dropTable('users');
}