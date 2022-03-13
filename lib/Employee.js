// TODO: Write code to define and export the Employee class
class Employee {
  // use inquirer to get data from user

  // takes data to get what we need to create properties
  constructor(name, id, email) {
    this.name = name || '';
    this.id = id;
    this.email = email;
  }
  
  // returns name value
  getName(){
    //return `This employee's name is ${this.name}.`; //this way does not pass the test
    return this.name;
  }

  // returns id value
  getId(){
    //return `${this.name}'s ID number is ${this.id}.`; //this way does not pass the test
    return this.id;
  }

  // returns email
  getEmail(){
    //return `${this.name}'s email is ${this.email}.` //this way does not pass the test
    return this.email;
  }

  // returns role 
  getRole(){
    return 'Employee'; // can I update this using Inquirer???
  }

} 


module.exports = Employee;