const { sequelize } = require(".");

const CategoriesModel = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
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

  Categories.associate = (models) => {
    Categories.belongsToMany(models.BlogPost, {
      through: "BlogPostCategories",
      as: "BlogPost",
      foreignKey: "categoryId",
    });
  };
  
  return Categories;
}

module.exports = CategoriesModel;
