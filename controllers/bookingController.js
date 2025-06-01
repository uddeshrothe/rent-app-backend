const db = require('../models');

exports.createBooking = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
    res.status(400).json({ message: 'Please fill all the fields' });
    return;
  }

  try {
    // Get bookings
    const allBookings = await db.Booking.findAll({ where: { vehicleId } });


    let isBooked = false;
    for (let booking of allBookings) {
      if (
        (new Date(startDate) >= new Date(booking.startDate) && new Date(startDate) <= new Date(booking.endDate)) ||
        (new Date(endDate) >= new Date(booking.startDate) && new Date(endDate) <= new Date(booking.endDate)) ||
        (new Date(startDate) <= new Date(booking.startDate) && new Date(endDate) >= new Date(booking.endDate))
      ) {
        isBooked = true;
        break;
      }
    }

    if (isBooked) {
      res.status(409).json({ message: 'Already booked on those dates' });
      return;
    }

    const newBooking = await db.Booking.create({
      firstName,
      lastName,
      vehicleId,
      startDate,
      endDate
    });

    res.status(201).json({ message: 'Booking successful!', booking: newBooking });

  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
