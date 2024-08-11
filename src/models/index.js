import { Sequelize } from 'sequelize';
import Member from './member.js';
import Gameification from './gamification.js'; // Gameification 모델이 사용되지 않는데, 필요하지 않다면 이 줄은 제거해도 됩니다.
import dotenv from 'dotenv';
import MemberStar from './memberStar.js';
import MemberPoint from './memberPoint.js';

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
    },
);

// console.log('sequelize: ', sequelize);
// console.log('process.env.MYSQL_DATABASE: ', process.env.MYSQL_DATABASE);
// console.log('process.env.MYSQL_USER: ', process.env.MYSQL_USER);
// console.log('process.env.MYSQL_PASSWORD: ', process.env.MYSQL_PASSWORD);
// console.log('process.env.MYSQL_HOST: ', process.env.MYSQL_HOST);
// console.log('process.env.MYSQL_PORT: ', process.env.MYSQL_PORT);

const db = {};

// 모델 초기화
Member.init(sequelize);
MemberPoint.init(sequelize);
MemberStar.init(sequelize);
Volunteer.init(sequelize);

// 모델을 db 객체에 추가
db.sequelize = sequelize;
db.Member = Member;
db.MemberPoint = MemberPoint;
db.MemberStar = MemberStar;
db.Gameification = Gameification;
db.Volunteer = Volunteer;
// MemberInfo

// 모델 간의 관계 설정
Member.associate && Member.associate(db);
MemberPoint.associate && MemberPoint.associate(db);
MemberStar.associate && MemberStar.associate(db);





export default db;
