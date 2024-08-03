import Sequelize from 'sequelize';

class Matchmaking extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      startdate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      enddate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      starttime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      endtime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Matchmaking',
      tableName: 'matchmakings',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
}

export default Matchmaking;