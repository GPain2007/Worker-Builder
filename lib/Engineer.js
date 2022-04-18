const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, id, github, role) {
    super(name, email, id);
    this.github = github;
    this.role = role;
  }
  getRole() {
    if (this.role == null) {
      return false;
    }
    return `Engineer`;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
