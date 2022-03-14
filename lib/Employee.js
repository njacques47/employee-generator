class Employee {
  constructor(name, id, email) {
    this.name = name || '';
    this.id = id;
    this.email = email;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole(){
    // returning role this way will ensure that the filtering and mapping in htmlRender sends the employee thru the correct process
    return 'Employee';
  }

} 


module.exports = Employee;