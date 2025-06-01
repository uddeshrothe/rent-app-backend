module.exports = (sequelize, DataTypes) => {
  return sequelize.define('VehicleType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wheels: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
