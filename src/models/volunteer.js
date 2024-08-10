import Sequelize from 'sequelize';

class Volunteer extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: { // 제목
        type: Sequelize.STRING(200),
        allowNull: false,
        // unique: true,
      },
      volunteerstartdate: { // 봉사 시작일
        type: Sequelize.DATE,
        allowNull: false,
      },
      volunteerenddate: { // 봉사 종료일
        type: Sequelize.DATE,
        allowNull: false,
      },
      volunteerstarttime: { // 봉사 시작 시간
        type: Sequelize.TIME,
        allowNull: false,
      },
      volunteerendtime: { // 봉사 종료 시간
        type: Sequelize.TIME,
        allowNull: false,
      },
      location: { // 장소
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      weekday: { // 요일
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      submitstartdate: { // 신청 시작일
        type: Sequelize.DATE,
        allowNull: false,
      },
      submitenddate: { // 신청 마감일
        type: Sequelize.DATE,
        allowNull: false,
      },
      url: { // 링크
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      state: { // 모집 상태
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      text: { // 설명
        type: Sequelize.STRING(700),
        allowNull: false,
      },
      condition: { // 참가 조건
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      volunteerorganization: { // 봉사 기관
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      category: { // 분류
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      registrationauthority: { // 등록기관
        type: Sequelize.STRING(60),
        allowNull: false,
      },

    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Volunteer',
      tableName: 'volunteers',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {

  }
}


export default Volunteer;