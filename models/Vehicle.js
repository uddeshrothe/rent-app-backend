module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Vehicle', {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    VehicleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VehicleTypes', 
        key: 'id',
      },
    },
  });
};
