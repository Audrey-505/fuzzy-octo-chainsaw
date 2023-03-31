const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userData.json');

const users = [];

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  users.push({
    email,
    password
  })

  await User.collection.insertMany(users);

  console.log('all done!');
  console.table(userData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});