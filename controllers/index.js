const router = require('express').Router();
// const PORT = 3001;

const homeRoute = require("./home-routes");
const apiRoute = require("./api/index")
//const userRoute = require("./api/user-routes");
router.use('/', homeRoute)
router.use('/api', apiRoute)

module.exports = router;