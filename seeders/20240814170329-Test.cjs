'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userNames = [
      'iih4450', 'mole12', 'jeja', 'wyc24', 'bbell',
      '봉사조아', 'myheart', 'yourmind', 'lilililil', 'judy',
      'HelpHero', 'KindSoul', 'CareGiver', 'VolunteerVibe', 'GoodHeart',
      'GivingHand', 'SupportSquad', 'CharityChampion', 'HopefulHelper', 'HeartfeltAid',
      '희망메이커', '도움손길', '사랑의손', '자비로운마음', '착한영혼',
      '기부천사', '힘내세요', '희망의별', '마음나눔', '행복전달자',
      '친절이웃', '마음교감', '사랑의별', '힘이되는사람', '가슴으로돕기',
      '함께하는희망', '보살핌천사', '온정의손길', '나눔왕', '행복한마음',
      '사랑을담다', '선한영향', '지원의별', '미소지기', '나눔의힘'
    ];

    const messages = [
      '지역 아동센터 봉사', '지역 도서관 봉사', '헌혈', '자원봉사',
      '학교 행사', '환경 정화 활동', '문화 행사', '기부',
      '무료 급식 제공', '노인 복지 활동', '동물 보호 활동', '재난 구호',
      '의료 지원', '홈리스 지원', '학교 교실 정리', '저소득층 지원',
      '어린이 안전 교육', '문화재 보존', '주거 환경 개선', '지방 자원 봉사',
      '노숙자 급식', '성교육', '자연 재해 복구', '다문화 가정 지원',
      '환경 보호 캠페인', '노인 대상 무료 의료', '지역사회 건강 증진', '청소년 멘토링',
      '학생 장학금 지원', '도시 미화 활동', '어르신 문화 체험', '보호종 동물 돌보기',
      '아동 대상 독서 교육', '임신부 지원', '다문화 교육', '청소년 자원봉사',
      '지역 안전 캠페인', '복지 시설 봉사', '사회적 기업 지원', '친환경 활동',
      '자연 탐방 프로그램', '전통 문화 체험', '장애인 지원 활동', '지역 특산물 판매',
      '주거 개선 프로젝트', '무료 의료 검진', '지역 스포츠 활동', '재활용 캠페인',
      '학교 환경 개선', '지역 축제 지원'
    ];

    function getRandomDate(year) {
      const start = new Date(year, 0, 1).getTime();
      const end = new Date(year, 11, 31).getTime();
      return new Date(start + Math.random() * (end - start));
    }

    async function hashPassword(password) {
      return bcrypt.hash(password, 10);
    }

    function getRandomRepeatCount() {
      return Math.floor(Math.random() * 10) + 1;
    }

    const transaction = await queryInterface.sequelize.transaction();

    try {
      const members = await Promise.all(userNames.map(async (name) => {
        const date = getRandomDate(2022);
        return {
          userid: name,
          password: await hashPassword(process.env.PRE_USER_PASSWORD),
          createdAt: date,
          updatedAt: date,
        };
      }));

      await queryInterface.bulkInsert('members', members, { transaction });

      const [users] = await queryInterface.sequelize.query(
          `SELECT id, userid, createdAt FROM members;`,
          { transaction }
      );

      const memberPoints = [];
      const memberStars = [];

      users.forEach(user => {
        const repeatCount = getRandomRepeatCount();

        memberPoints.push({
          memberId: user.id,
          point: 0,
          message: '새로운 여정의 시작',
          createdAt: user.createdAt,
          updatedAt: user.createdAt,
        });
        memberStars.push({
          memberId: user.id,
          star: 0,
          message: '새로운 여정의 시작',
          createdAt: user.createdAt,
          updatedAt: user.createdAt,
        });

        for (let i = 0; i < repeatCount; i++) {
          const date = getRandomDate(2023);
          const msg = messages[Math.floor(Math.random() * messages.length)];
          memberPoints.push({
            memberId: user.id,
            point: Math.floor(Math.random() * 1000),
            message: msg,
            createdAt: date,
            updatedAt: date,
          });
          memberStars.push({
            memberId: user.id,
            star: Math.floor(Math.random() * 5) + 1,
            message: msg,
            createdAt: date,
            updatedAt: date,
          });
        }
      });

      await queryInterface.bulkInsert('memberPoints', memberPoints, { transaction });
      await queryInterface.bulkInsert('memberStars', memberStars, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete('memberStars', null, { transaction });
      await queryInterface.bulkDelete('memberPoints', null, { transaction });
      await queryInterface.bulkDelete('members', null, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
