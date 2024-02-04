const seedUsers = require("./user_seeds");
const seedStudyPosts = require("./studypost_seeds");

const sequelize = require("../db/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("Database has been synced");

  await seedUsers();
  console.log("Users seeded");

  await seedStudyPosts();
  console.log("seedStudyPosts seeded");

  process.exit(0);
};

seedAll();
