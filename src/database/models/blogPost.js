'use strict';

const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  }
  return BlogPostTable;
};

module.exports = BlogPostSchema;