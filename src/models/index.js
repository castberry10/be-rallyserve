// models/index.js
// import { Sequelize, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize';
import Member from './member.js';
import Gameification from './gamification.js';
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  }
);

const db = {};
db.sequelize = sequelize;
db.Member = Member;
db.Gameification = Gameification;

// 모델 초기화 필요
export default db;