const Employee = require('./Employee');

// create Intern class and extend specified employee class content
class Intern extends Employee {
  constructor(name = '', id = '', email = '', school = '') {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  };
};

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