const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './vehiclerental.sqlite'
});

module.exports = sequelize;
