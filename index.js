const { prompt } = require("inquirer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(_dirname, "dist");
const outputFileName = path.join(OUTPUT_DIR, `index.html`);

const render = require("./src/Team");

const teamMems = [];

const init = () => {
  const buildTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamMemsChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I do not want to add anymore team members",
          ],
        },
      ])
      .then((yourChoice) => {
        switch (yourChoice.teamMemsChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            CreateTeamHtmlFile();
        }
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

  const createManger = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: `What is your Manager's name?`,
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "managerID",
          message: `What is your Manager's ID?`,
          validate: (answer) => {
            const pass = answer.match(
              //finding this nonsense sucks but very useful
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: `What is your Manager's email address?`,
          validate: (answer) => {
            const pass = answer.match(
              //this trash is again was very hard but very useful once I found the DOCs
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: `What is your team Manager's office number?`,
          validate: (answer) => {
            const pass = answer.match(
              //finding this nonsense sucks but very useful
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerOfficeNumber,
          answers.managerEmail
        );
        teamMems.push(manager);
        console.log(teamMems);
        buildTeam();
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: `What is your Engineer's name?`,
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "engineerID",
          message: `What is your Engineer's ID?`,
          validate: (answer) => {
            const pass = answer.match(
              //finding this nonsense sucks but very useful
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: `What is your Engineer's email address?`,
          validate: (answer) => {
            const pass = answer.match(
              //this trash is again was very hard but very useful once I found the DOCs
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: `What is your Github Username?`,
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMems.push(engineer);
        console.log(teamMems);
        buildTeam();
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

  const createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: `What is your Intern's name?`,
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "internID",
          message: `What is your Intern's ID?`,
          validate: (answer) => {
            const pass = answer.match(
              //finding this nonsense sucks but very useful
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: `What is your Intern's email address?`,
          validate: (answer) => {
            const pass = answer.match(
              //this trash is again was very hard but very useful once I found the DOCs
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "internSchoolName",
          message: `What is your School's Name?`,
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.managerEmail,
          answers.internSchoolname
        );
        teamMems.push(intern);
        console.log(teamMems);
        buildTeam();
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

  const buildTeamHtmllFile = () => {
    //Thank you to mike to letting me know about how to write to a file!! This is awesome!
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputFileName, render(teamMems), "utf-8");
  };

  createManger();
};
init();
