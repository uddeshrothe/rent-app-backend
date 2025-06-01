const db = require('./models');

const seed = async () => {
  await db.sequelize.sync({ force: true });

  // Create vehicle types
  const hatchback = await db.VehicleType.create({ name: 'Hatchback', wheels: 4 });
  const suv = await db.VehicleType.create({ name: 'SUV', wheels: 4 });
  const sedan = await db.VehicleType.create({ name: 'Sedan', wheels: 4 });

  const cruiser = await db.VehicleType.create({ name: 'Cruiser', wheels: 2 });

  // Vehicles for each type
  await db.Vehicle.bulkCreate([
    { model: 'Swift', VehicleTypeId: hatchback.id },
    { model: 'Baleno', VehicleTypeId: hatchback.id },
    { model: 'Creta', VehicleTypeId: suv.id },
    { model: 'Scorpio', VehicleTypeId: suv.id },
    { model: 'Verna', VehicleTypeId: sedan.id },
    { model: 'City', VehicleTypeId: sedan.id },
    { model: 'Avenger', VehicleTypeId: cruiser.id },
    { model: 'Royal Enfield', VehicleTypeId: cruiser.id }
  ]);

  console.log('Database seeded!');
  process.exit();
};

seed();
