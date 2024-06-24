const router = require('express').Router();

//const apiRoutes = require('./api');
//const homeRoutes = require('./home-routes.js');
//const dashboardRoutes = require('./dashboard-routes.js');

//router.use('/', homeRoutes);
//router.use('/dashboard', dashboardRoutes);
//router.use('/api', apiRoutes);

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;

