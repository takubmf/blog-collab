const { User } = require('../models');

const userdata =
[
  {
    "username": "",
    "password": ""
  },
  {
    "username": "",
    "password": ""
  },
  {
    "username": "",
    "password": ""
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;