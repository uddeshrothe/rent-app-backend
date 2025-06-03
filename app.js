const express = require('express');
const app = express();
const db = require('./models');
const bookingRoutes = require('./routes/bookings');
const vehicleRoutes = require('./routes/vehicleRoutes');
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use('/api/bookings', bookingRoutes);
app.use('/api', vehicleRoutes);

const PORT = process.env.PORT || 4000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
