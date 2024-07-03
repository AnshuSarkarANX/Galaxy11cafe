const express = require('express');
const Route = express.Router()
const ApiController = require('../Controller/apiController')
const uploadImage=require('../middleware/uploadImg')


Route.get('/api/products', ApiController.product)
Route.post('/api/create-banner', ApiController.createBanner)

Route.post('/api/create-Ratings',uploadImage.single('image'), ApiController.createReating)
Route.get('/api/ratings', ApiController.rating)

Route.post('/api/bookings', ApiController.createBooking);
Route.get('/api/getbookings', ApiController.getBookings);
Route.get('/api/available-time-slots', ApiController.getAvailableTimeSlots);

Route.get('/api/offer',ApiController.Offerzone)

module.exports = Route;