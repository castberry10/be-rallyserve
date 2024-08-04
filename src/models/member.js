import Sequelize from 'sequelize';

// 시퀄라이즈가 id 컬럼은 자동생성 -> 알아서 기본키로 설정

class Member extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userid: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Member',
      tableName: 'members',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Member.hasMany(db.MemberPoint, { foreignKey: 'memberId', sourceKey: 'id' });
    db.Member.hasMany(db.MemberStar, { foreignKey: 'memberId', sourceKey: 'id' });
  }
}

export default Member;
