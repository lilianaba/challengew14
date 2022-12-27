const router = require('express').Router();
const userRoutes = require('./usersroutes');
const commentRoutes = require('./commentsroutes');
const postRoutes = require('./postroutes');

router.use('/users', userRoutes);
// router.use('/comments', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
