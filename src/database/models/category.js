'use strict';

const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }); 
  return CategoryTable;
}

module.exports = CategorySchema;