const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// console.log("FAANG Enterprises is really impressed with the progress you've made on helping us make a team! The final step is to get our new team members into our database. Please provide the details for the employees that you've hired.");

// Write code to use inquirer to gather information about the development team members,
const onboardingQs = [
  {
    type: 'text',
    name: 'name',
    message: 'What is the name of the new hire?'
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is their id number? (numerical values only)'
  },
  {
    type: 'text',
    name: 'email',
    message: 'Please provide their email address.'
  },
  {
    type: 'list',
    name: 'role.assignment',
    message: "What is this person's role?",
    choices: ['Manager', 'Engineer', 'Intern']
  },
  {
    type: 'number',
    name: 'role.manager',
    message: 'What is their office number? (numerical values only)',
    when: answer.role.assignment === "Manager"
  },
  {
    type: 'input',
    name: 'role.engineer',
    message: 'What is their github username?',
    when: answer.role.assignment === "Engineer"
  },
  {
    type: 'input',
    name: 'role.intern',
    message: 'What school does this intern attend?',
    when: answer.role.assignment === "Intern"
  },
  {
    type: 'confirm',
    name: 'role.intern',
    message: 'Would you like to add another employee to the team?'
  }
]


// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
