const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Kazi Ahosun Habib",
    email: "ahosun.habib@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Kazi Azmain Habib",
    email: "azmain.habib@gmail.com",
  },
];

module.exports = users;
