const Employee = require('./Employee');

// create Engineer class and extend specified employee class content
class Engineer extends Employee {
  constructor(name = '', id = '', email = '', github = '') {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  };
};

// write/return block of code using collected data
Engineer.prototype.engineerHTML = function() {
  return `
  <div class="col-4 my-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">Email: ${this.email}</p>
        <p class="card-text">Employee Id: ${this.id}</p>
        <p class="card-text">Role: ${this.role}</p>
        <p class="card-text">Github: ${this.github}</p>
      </div>
    </div>
  </div>
  `
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