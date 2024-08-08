import Sequelize from 'sequelize';

class Volunteer extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: { // 제목
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
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
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      text: { // 설명
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      weekday: { // 요일
        type: Sequelize.STRING(10),
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
    // db.Volunteer.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
    // db.Volunteer.hasMany(db.VolunteerSubmit, { foreignKey: 'volunteer_id', sourceKey: 'id' });
  }
}

export default Volunteer;