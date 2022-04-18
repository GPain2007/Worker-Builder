const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, role, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
    this.role = role;
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
