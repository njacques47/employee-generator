// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// class Beta extends Alpha denotes that this is a child object using the parent as a template
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // this pulls in the inherited properties
    super(name, id, email);

    // this is a property that all engineers will have
    this.github = github;
  }
  //property of this value is returned
  getGithub() {
    return this.github;
  }

  getRole(){
    return 'Engineer';
  }
}

module.exports = Engineer;