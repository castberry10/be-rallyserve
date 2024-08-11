import Sequelize from 'sequelize';

class Matchmaking extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      
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