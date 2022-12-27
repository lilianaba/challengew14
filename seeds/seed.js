const sequelize = require('../config/connection');
const { User, Post, Comment} = require('../models');

const userData = require('./usersData.json');
const postsData = require('./postsData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postsData) {
    await Post.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comments of commentsData) {
    await Comment.create({
        ...comments,
        user_id:users[Math.floor(Math.random() * users.length)].id,
    });
    
  }

  process.exit(0);
};

seedDatabase();