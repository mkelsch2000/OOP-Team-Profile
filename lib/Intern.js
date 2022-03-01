const Employee = require('./Employee');

// create Intern class and extend specified employee class content
class Intern extends Employee {
  constructor(name = '', id = '', email = '', school = '') {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  };
};

// write/return block of code using collected data
Intern.prototype.internHTML = function() {
  return `
  <div class="col-4 my-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">Email: ${this.email}</p>
        <p class="card-text">Employee Id: ${this.id}</p>
        <p class="card-text">Role: ${this.role}</p>
        <p class="card-text">School: ${this.school}</p>
      </div>
    </div>
  </div>
  `
}

module.exports = Intern;

// original test passing code:

// class Intern extends Employee {
//   constructor(name = '', id = '', email = '', school = '') {
//     super(name, id, email);
//     this.school = this.getSchool(school);
//     this.role = this.getRole();
//   };

//   getSchool(internSchool) {
//     return internSchool;
//   };

//   getRole() {
//     return 'Intern';
//   };
// };

// module.exports = Intern;