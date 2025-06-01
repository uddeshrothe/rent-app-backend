const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.VehicleType = require('./VehicleType')(sequelize, Sequelize);
db.Vehicle = require('./Vehicle')(sequelize, Sequelize);
db.Booking = require('./Booking')(sequelize, Sequelize);

// Associations
db.VehicleType.hasMany(db.Vehicle);
db.Vehicle.belongsTo(db.VehicleType);

db.Vehicle.hasMany(db.Booking);
db.Booking.belongsTo(db.Vehicle);

module.exports = db;
