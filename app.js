const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// push created employees here??
const teamArray = [];

// made this into a function to loop through if necessary (previously just an array of Qs)
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

    // information finally looping based on condition (shout out to module 9)
    .then(teamData => {
      employeeProfile(teamData);
      console.log(teamData)
      if(teamData.addEmployee === true) {
        return onboardingQs()
      } else {
        return `Since there are no more additions to the team, you'll be notified when the details have been assembled.`
      }
    })
}

// create new employees based on satisfied conditions
// added data parameter to pass populate how its supposed to
function employeeProfile(data) {
  // if manager, return new manager obj and push it to array
  if (data.role === 'Manager') {
    let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    // push new manager object to array
    teamArray.push(manager);
  } else if (data.role === 'Engineer') {
    let engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamArray.push(engineer);
  } else if (data.role === 'Intern') {
    let intern = new Intern(data.name, data.id, data.email, data.school);
    teamArray.push(intern);
  }
}

// runs all the important things to make the app work
function buildTeam() {
  // explains what they are doing with this app
  console.log(`Please provide the details for the team you've created by answering the following questions:
============================================================================================
  `);

  // we get our first employee!
  onboardingQs()
    // pushes employee to teamArr and checks to add more
    // .then((teamData) => {
    //   // add a new employee & push to teamArray
    //   if (teamData.addEmployee === true || 'yes') {
    //     employeeProfile(teamData);
    //     onboardingQs();
    //   }
    //   // only push collected data to teamArray
    //   if (teamData.addEmployee === false) {
    //     return employeeProfile(teamData);
    //   }
    // })
    .then((teamData) => {
      console.log("Here's your new team!", teamArray);
    })
    .catch(err => {
      console.log(err, "Error found")
    })
}


buildTeam();

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```