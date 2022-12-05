module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: "posts_categories",
  });

  model.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: "PostCategory",
      as: "posts",
      foreignKey: "categoryId",
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: "PostCategory",
      as: "categories",
      foreignKey: "postId",
    });
  };


  return model;
};