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
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Member.hasMany(db.MemberPoint, { foreignKey: 'memberId', sourceKey: 'id' });
        db.Member.hasMany(db.MemberStar, { foreignKey: 'memberId', sourceKey: 'id' });
    }
};
