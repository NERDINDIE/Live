const express = require('express');
const app = express();

app.use(express.json());

app.get('/food-delivery/restaurants', (req, res) => {
  res.json([/* list of restaurants */]);
});

app.post('/food-delivery/order', (req, res) => {
  const { restaurantId, items } = req.body;
  // Process order
  res.json({ success: true, orderId: '12345' });
});

app.get('/car-rental/cars', (req, res) => {
  res.json([/* list of cars */]);
});

app.post('/car-rental/rent', (req, res) => {
  const { carId, rentalPeriod } = req.body;
  // Process rental
  res.json({ success: true, rentalId: '67890' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
