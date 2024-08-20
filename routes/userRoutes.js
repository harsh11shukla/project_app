const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/update-profile', authenticateJWT, userController.updateProfile);

module.exports = router;
