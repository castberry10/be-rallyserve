// models/index.js
// import { Sequelize, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize';
import Member from './member.js';
import Gameification from './gamification.js';
import dotenv from 'dotenv';
import Volunteer from './volunteer.js';
dotenv.config();
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT,
    // port: 3306,
  },
);
// console.log('sequelize: ', sequelize);
// console.log('process.env.MYSQL_DATABASE: ', process.env.MYSQL_DATABASE);
// console.log('process.env.MYSQL_USER: ', process.env.MYSQL_USER);
// console.log('process.env.MYSQL_PASSWORD: ', process.env.MYSQL_PASSWORD);
// console.log('process.env.MYSQL_HOST: ', process.env.MYSQL_HOST);
// console.log('process.env.MYSQL_PORT: ', process.env.MYSQL_PORT);

const db = {};
db.sequelize = sequelize;
db.Member = Member;
db.Gameification = Gameification;
db.Volunteer = Volunteer;

Member.init(sequelize);
Volunteer.init(sequelize);
// Gameification.init(sequelize);

// 모델 초기화 필요
export default db;