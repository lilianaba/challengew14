const router = require('express').Router();
const userRoutes = require('./usersroutes');
const commentRoutes = require('./commentsroutes');
const postRoutes = require('./postroutes');
const newpostRoutes = require('./postroutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/post', postRoutes);
router.use('/newpost', newpostRoutes);


module.exports = router;
