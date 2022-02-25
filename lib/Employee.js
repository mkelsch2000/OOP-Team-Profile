const inquirer = require('inquirer');

// creates Employee class
class Employee {
  constructor(name = '', id = '', email = '') {
    this.name = this.getName(name);
    this.id = this.getId(id);
    this.email = this.getEmail(email);
    this.role = this.getRole();
  }

  // function to get name of employee
  getName(employeeName) {
    inquirer
      .prompt ({
        type: 'input',
        name: 'name',
        message: "What is your employee's name?"
      })
    return employeeName;
  };

  // function to get the id of employee
  getId(employeeId) {
    return employeeId;
  };

  // function to get email of employee
  getEmail(employeeEmail) {
    return employeeEmail;
  };

  // function to get role of employee, always returns employee
  getRole() {
    return 'Employee';
  };
};

module.exports = Employee;

// original test passing code:

// class Employee {
//   constructor(name = '', id = '', email = '') {
//     this.name = this.getName(name);
//     this.id = this.getId(id);
//     this.email = this.getEmail(email);
//     this.role = this.getRole();
//   }

//   // function to get name of employee
//   getName(employeeName) {
//     return employeeName;
//   };

//   // function to get the id of employee
//   getId(employeeId) {
//     return employeeId;
//   };

//   // function to get email of employee
//   getEmail(employeeEmail) {
//     return employeeEmail;
//   };

//   // function to get role of employee, always returns employee
//   getRole() {
//     return 'Employee';
//   };
// };

// module.exports = Employee;