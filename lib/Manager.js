const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
    //this.role = role;
  }
  getRole() {
    return `Manager`;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
