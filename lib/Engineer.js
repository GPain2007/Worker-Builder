const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id);
    this.github = github;
    //this.role = role;
  }
  getRole() {
    return `Engineer`;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
