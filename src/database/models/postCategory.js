'use strict';

const postCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }); 

  PostCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as:'BlogPosts',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as:'categories',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }

  return PostCategoryTable;
}

module.exports = postCategorySchema;