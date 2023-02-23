const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const thoughtRoutes = require('./thoughtsRoutes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
