const express = require('express');
const router = express.Router();
const { VehicleType, Vehicle } = require('../models');

// GET /api/vehicle-types?wheels=2
router.get('/vehicle-types', async (req, res) => {
  try {
    const { wheels } = req.query;
    const types = await VehicleType.findAll({
      where: wheels ? { wheels } : undefined,
    });
    res.json(types);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching vehicle types' });
  }
});

// GET /api/vehicles?typeId=1
router.get('/vehicles', async (req, res) => {
  try {
    const { typeId } = req.query;
    const vehicles = await Vehicle.findAll({
      where: typeId ? { vehicleTypeId: typeId } : undefined,
    });
    res.json(vehicles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching vehicles' });
  }
});

router.get('/vehicle-models', async (req, res) => {
  const { typeId } = req.query;
  if (!typeId) {
    return res.status(400).json({ message: 'typeId is required' });
  }

  try {
    const models = await Vehicle.findAll({
      where: { VehicleTypeId: typeId },
    });
    res.json(models);
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
