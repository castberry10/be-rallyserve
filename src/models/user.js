// const Sequelize = require('sequelize');
// module.exports = class User extends Sequelize.Model{
//     static init(sequelize){
//         return super.init({
//             email: {
//                 type: Sequelize.STRING(40),
//                 allowNull:true,
//                 unique: true,
//             },
//             nick: {
//                 type: Sequelize.STRING(15),
//                 allowNull: true,
//             },
//             password:{
//                 typr: Sequelize.STRING(100),
//                 allowNull: true,
//             },
//             provider:{
//                 type: Sequelize.STRING(10),
//                 allowNull:false,
//                 defaultValue: 'local',

//             },
//             snsId:{
//                 type:Sequelize.STRING(30),
//                 allowNull:true,
//             },
//         }, {
//             sequelize,
//             timestamps: false,
//             underscored: false,
//             modelName: 'User',
//             tableName: 'users',
//             paranoid: false,
//             charset: 'utf8',
//             collate: 'utf8_general_ci',
//         });
//     }
//     static associate(db){
//         db.User.hasMany(db.Post);
//         db.User.belongsToMany(db.User, {
//             foreignkey: 'followingId',
//             as:'Followers',
//             through: 'Follow',
//         });
//         db.User.belongsToMany(db.User, {
//             foreignkey: 'followerId',
//             as: 'Followings',
//             through:'Follow',
//         });
//     }
// };