class Employee {
  constructor(name = "", email = "", id = null, role = null) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }
  getName() {
    if (this.name == "") {
      return `please enter a valid name`;
    }
    return this.name;
  }
  getEmail() {
    if (this.email == "") {
      return `please enter a valid email`;
    }
    return this.email;
  }
  getID() {
    if (this.id == "" || this.id == null || this.id < 0) {
      return `please enter a valid id number`;
    }
    return this.id;
  }
  getRole() {
    if (this.role == null) {
      return false;
    }
    return `Employee`;
  }
}

module.exports = Employee;
