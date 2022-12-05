const { sequelize } = require(".");

const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.BlogPost, {
      foreignKey: "postId",
      as: "post",
    });

    PostCategory.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  };

  return PostCategory;
}

module.exports = PostCategoryModel;