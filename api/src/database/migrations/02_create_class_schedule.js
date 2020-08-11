const Knex = require('knex');

exports.up = async function (knex = Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();


    table.integer('class_id')
      .notNullable()
      .references('classes')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

exports.down = async function (knex = Knex) {
  return knex.schema.dropTable('class_schedule');
}