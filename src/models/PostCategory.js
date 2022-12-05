module.exports = (sequelize, DataTypes) => {
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
    tableName: "posts_categories",
  });

  model.associate = (models) => {
    model.belongsToMany(models.BlogPost, {
      foreignKey: "postId",
      as: "post",
    });

    model.belongsToMany(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  };


  return model;
};