const Sequelize = require('sequelize');

module.exports  = new Sequelize('codegig', 'postgres', 'Q4coc$cola', {
    host: '45.79.109.13',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

