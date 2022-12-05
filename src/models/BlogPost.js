module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("BlogPosts", {
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

  model.associate = (models) => {
    model.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user",
    });

    model.belongsToMany(models.Categories, {
      through: "BlogPostCategories",
      as: "categories",
      foreignKey: "blogPostId",
    });
  };

  return model;
};
