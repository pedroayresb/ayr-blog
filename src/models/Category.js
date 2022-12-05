module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });

  model.associate = (models) => {
    model.belongsToMany(models.BlogPost, {
      through: "BlogPostCategories",
      as: "BlogPost",
      foreignKey: "categoryId",
    });
  };
  
  return model;
};
