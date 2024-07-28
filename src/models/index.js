// models/index.js
// import { Sequelize, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  }
);

// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {});
const db = {};
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection to MySQL has been established successfully.');
//     await sequelize.sync();
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

db.sequelize = sequelize;

export default db;