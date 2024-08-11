import Sequelize from 'sequelize';

class MemberStar extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      memberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'members',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      Star: {
        type: Sequelize.INTEGER,
        allowNull: false,
        min: 0,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'MemberStar',
      tableName: 'memberStars',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.MemberStar.belongsTo(db.Member, { foreignKey: 'memberId', targetKey: 'id' });
  }
}

export default MemberStar;
