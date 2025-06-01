const express = require('express');
const app = express();
const db = require('./models');
const bookingRoutes = require('./routes/bookings');
const vehicleRoutes = require('./routes/vehicleRoutes');

app.use(express.json());
app.use('/api/bookings', bookingRoutes);
app.use('/api', vehicleRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
