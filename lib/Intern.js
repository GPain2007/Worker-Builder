const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id);
    this.school = school;
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
