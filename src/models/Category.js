const { sequelize } = require(".");

const Categories = (sequelize, DataTypes) => {
  const model = sequelize.define("Categories", {
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
}

module.exports = Categories;
