const knex = require('knex');
const path = require('path');

const db = knex({
  client: 'sqlite',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

module.exports = db;