const { sequelize } = require(".");

const UsersModel = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
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

  Users.associate = (models) => {
    Users.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "BlogPost",
    });
  };

  return Users;
}

module.exports = UsersModel;