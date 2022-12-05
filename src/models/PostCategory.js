const { sequelize } = require(".");

const PostCategory = (sequelize, DataTypes) => {
  const model = sequelize.define("PostCategory", {
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

  model.associate = (models) => {
    model.belongsTo(models.BlogPost, {
      foreignKey: "postId",
      as: "post",
    });

    model.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  };

  return model;
}

module.exports = PostCategory;