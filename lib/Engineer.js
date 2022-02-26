const inquirer = require('inquirer');
const Employee = require('./Employee');

// create Engineer class and extend specified employee class content
class Engineer extends Employee {
  constructor(name = '', id = '', email = '', github = '') {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  };
};

module.exports = Engineer;

// original test passing code:

// class Engineer extends Employee {
//   constructor(name = '', id = '', email = '', github = '') {
//     super(name, id, email);
//     this.github = this.getGithub(github);
//     this.role = this.getRole();
//   };

//   getGithub(employeeGitHub) {
//     return employeeGitHub;
//   };

//   getRole() {
//     return 'Engineer';
//   };
// };

// module.exports = Engineer;