const { SequelizeInstance } = require("../config/db");
const employeeModel = require("../models/employeeModel");

class Employee {
  error = false;

  constructor(name, phone_number, jobtitle) {
    this.model = employeeModel(SequelizeInstance);

    this.name = name;
    this.phone_number = phone_number;
    this.jobtitle = jobtitle;

    this.initModel();
  }

  async initModel() {
    try {
      this.error = false;
      await SequelizeInstance.sync();
    } catch (err) {
      this.error = true;
    }
  }

  async employees() {
    try {
      if (this.error) {
        return false;
      } else {
        this.error = false;
        const res = await this.model.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        return res;
      }
    } catch (err) {
      this.error = true;
      return err.toString();
    }
  }

  async employee(id) {
    try {
      if (this.error) {
        return false;
      } else {
        this.error = false;
        const res = await this.model.findByPk(id, {
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        return res;
      }
    } catch (err) {
      this.error = true;
      return err.toString();
    }
  }

  async create() {
    try {
      if (this.error || (!this.name && !this.phone_number && !this.jobtitle)) {
        return false;
      } else {
        this.error = false;

        const res = await this.model.create({
          name: this.name,
          phone_number: this.phone_number,
          jobtitle: this.jobtitle,
        });

        return res;
      }
    } catch (err) {
      this.error = true;
      return err.toString();
    }
  }

  async update(id) {
    try {
      if (this.error || (!this.name && !this.phone_number && !this.jobtitle)) {
        return false;
      } else {
        this.error = false;

        await this.model.update(
          {
            name: this.name,
            phone_number: this.phone_number,
            jobtitle: this.jobtitle,
          },
          {
            where: {
              id,
            },
          }
        );

        const res = await this.employee(id);

        return res;
      }
    } catch (err) {
      this.error = true;
      return err.toString();
    }
  }

  async delete(id) {
    try {
      if (this.error) {
        return false;
      } else {
        this.error = false;

        const res = await this.model.destroy({
          where: {
            id,
          },
        });

        return res;
      }
    } catch (err) {
      this.error = true;
      return err.toString();
    }
  }
}

module.exports = Employee;
