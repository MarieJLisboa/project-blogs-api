'use strict';
const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'Users',
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, { as: 'BlogPosts', foreignKey: 'userId' });
  }
  return UserTable;
};

module.exports = UserSchema;