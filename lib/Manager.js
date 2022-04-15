const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
  }
  getRole() {
    if (this.role == null) {
      return false;
    }
    return `Manager`;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
