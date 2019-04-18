// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.USERNAME,
      password: process.env.PASSWORD
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.USERNAME,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.USERNAME,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
