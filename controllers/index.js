const express = require('express');
const router = express.Router();
const PORT = 3001;

const userRoute = require("./api/user-routes");
const homeRoute = require("./home-routes");
router.use('/user', userRoute)
router.use('./home', homeRoute)

module.exports = router;