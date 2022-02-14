const express = require('express');
const vehicleController = require('../controllers/vehicle.controller');

const router = express.Router();

router.get('/',vehicleController.get);

router.get('/getallmakes',vehicleController.getallmakes);

router.get('/getMakesForManufacturerAndYear/:Manufacturer/:Year',vehicleController.getMakesFromManufacturerAndYear);

router.get('/getDetailsFromVin/:Vin',vehicleController.getDetailsFromVin);

module.exports = router;