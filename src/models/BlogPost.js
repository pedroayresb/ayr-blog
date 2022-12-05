const { sequelize } = require(".");

const BlogPostsModel = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPosts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    underscored: true,
    timestamps: false,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user",
    });

    BlogPosts.belongsToMany(models.Categories, {
      through: "BlogPostCategories",
      as: "categories",
      foreignKey: "blogPostId",
    });
  };

  return BlogPosts;
}

module.exports = BlogPostsModel;
