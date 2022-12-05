module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    underscored: true,
    timestamps: false,
  });

  model.associate = (models) => {
    model.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return model;
};
