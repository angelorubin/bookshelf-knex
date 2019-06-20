module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "master77",
      database: "bookshelf_knex_dev"
    }
  },
  production: {
    client: process.env.BS_CLIENT,
    connection: {
      host: process.env.BS_HOST,
      user: process.env.BS_USER,
      password: process.env.BS_PW,
      database: process.env.BS_DB
    }
  }
};
