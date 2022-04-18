class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
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
    return `Employee`;
  }
}

module.exports = Employee;
