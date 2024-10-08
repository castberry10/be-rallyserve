import Sequelize from 'sequelize';

class MemberPoint extends Sequelize.Model {
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
        indexes: [{ unique: false, fields: ['memberId'] }],
      },
      point: {
        type: Sequelize.INTEGER,
        allowNull: false,
        min: 0,
      },
      message: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'MemberPoint',
      tableName: 'memberPoints',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.MemberPoint.belongsTo(db.Member, { foreignKey: 'memberId', targetKey: 'id' });
  }
}

export default MemberPoint;
