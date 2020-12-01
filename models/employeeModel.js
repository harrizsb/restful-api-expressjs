const Sequelize = require("sequelize");

module.exports = (sequelizeInstance) => {
  const Employees = sequelizeInstance.define("employees", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(50),
    },
    phone_number: {
      type: Sequelize.STRING(16),
    },
    jobtitle: {
      type: Sequelize.STRING(25),
    },
  });

  Employees.sync();

  return Employees;
};
