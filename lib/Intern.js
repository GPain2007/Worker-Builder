const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, id, role, school) {
    super(name, email, id);
    this.school = school;
    this.role = role;
  }
  getRole() {
    if (this.role == null) {
      return false;
    }
    return `Intern`;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
