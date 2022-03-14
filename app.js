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
function onboardingQs() {
  inquirer
    .prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new hire?'
  },
  {
    type: 'number', 
    name: 'id',
    message: 'What is their id number? (numerical values only)'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide their email address.'
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
    when: answer.role === "Manager"
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is their github username?',
    when: answer.role === "Engineer"
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school does this intern attend?',
    when: answer.role === "Intern"
  },
  {
    type: 'confirm',
    name: 'addEmployee',
    message: 'Would you like to add another employee to the team?'
  }
  ])
}

// create new employees based on satisfied conditions
function employeeProfile() {
  // if manager, return new manager obj and push it to array
  if (teamData.role === 'Manager'){
    //
  }
  // if engineer, return new engineer obj and push it to array
  else if (teamData.role === 'Engineer'){
    //
  }
  // if intern, return new intern obj and push it to array
  else if (teamData.role === 'Intern'){
    //
  }
}

// runs all the important things to make the app work
function buildTeam() {
  // explains what they are doing with this app
  console.log(`
  FAANG Corp is really impressed with the progress you've made setting up a new team! We just need the information of each employee to set up their chain of command. Please provide the requested details.
  =====================================================================================================
  `);

  // prompt Qs
  onboardingQs()
  .then((teamData) => {
    // if they would like to add another employee, add a new employee
    if (teamData.addEmployee === true) {
      return onboardingQs(teamData);
    }

    //

  })
}


// buildTeam();

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
