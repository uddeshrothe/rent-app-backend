const express = require('express');
const app = express();
const db = require('./models');
const bookingRoutes = require('./routes/bookings');

app.use(express.json());
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
