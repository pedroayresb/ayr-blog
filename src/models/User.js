module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
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

};