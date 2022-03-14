const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "mock-team.html");

const render = require("./lib/htmlRenderer");
const teamArray = [];

const onboardingQs = () => {
  return inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the name of the new hire?',
        validate(answer) {
          if (!answer) {
            return "Provide a valid entry."
          }
          return true
        }
      },
      {
        type: 'number',
        name: 'id',
        message: 'What is their id number? (numerical values only)'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide their email address.',
        validate(answer) {
          if (!answer) {
            return "Provide a valid entry."
          }
          return true
        }
      },
      {
        type: 'list',
        name: 'role',
        message: "What is this person's role?",
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'number',
        name: 'officeNumber',
        message: 'What is their office number? (numerical values only)',
        when(answer) {
          return answer.role === "Manager"
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is their github username?',
        when(answer) {
          return answer.role === "Engineer"
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school does this intern attend?',
        when(answer) {
          return answer.role === "Intern"
        }
      },
      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee to the team?'
      }
    ])

    .then(teamData => {
      employeeProfile(teamData);
      console.log(teamData)
      if(teamData.addEmployee === true) {
        return onboardingQs()
      } else {
        return `Thanks for providing the requested information.`
      }
    })
}

function employeeProfile(data) {
  if (data.role === 'Manager') {
    let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    teamArray.push(manager);
  } else if (data.role === 'Engineer') {
    let engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamArray.push(engineer);
  } else if (data.role === 'Intern') {
    let intern = new Intern(data.name, data.id, data.email, data.school);
    teamArray.push(intern);
  }
}

const renderTeam = employees => {
  const teamTemplate = render(employees);
  return new Promise ((resolve, reject) => {
    fs.writeFile(outputPath, teamTemplate, err => {
      if(err) {
        reject(err);
        return `error rendering team`;
      }

      resolve("We've successfully updated your team! Check the output folder for your new file.")
    });
  });
}

function buildTeam() {
  console.log(`Please provide the details for the team you've created by answering the following questions:
============================================================================================
  `);

  onboardingQs()
    .then(onboardingResponse => {
      console.log(onboardingResponse)
      return renderTeam(teamArray)
    })
    .then((renderResponse) => {
      console.log(renderResponse);
    })
    .catch(err => {
      console.log(err);
    });
}


buildTeam();