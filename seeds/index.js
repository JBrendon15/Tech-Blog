const sequelize = require('../config/connection');
const seedComments = require('./commentsData');
const seedPosts = require('./postsData');
const seedUsers = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();