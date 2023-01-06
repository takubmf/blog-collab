const router = require('express').Router();
// const PORT = 3001;

const homeRoute = require("./home-routes");
const userRoute = require("./api/user-routes");
router.use('/', homeRoute)
router.use('/user', userRoute)

module.exports = router;