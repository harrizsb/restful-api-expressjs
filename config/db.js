const Sequelize = require("sequelize");
const SequelizeInstance = new Sequelize("company", "root", "root123", {
  host: "db",
  dialect: "mariadb",
});

module.exports = {
  SequelizeInstance,
};
