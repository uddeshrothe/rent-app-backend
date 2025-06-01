module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Vehicle', {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
