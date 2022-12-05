const { sequelize } = require(".");

const Users = (sequelize, DataTypes) => {
  const model = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image:DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });

  model.associate = (models) => {
    model.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "BlogPost",
    });
  };

  return model;
}

module.exports = Users;