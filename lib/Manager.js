const Employee = require('./Employee');

// create Manager class and extend specified employee class content
class Manager extends Employee {
  constructor(name = '', id = '', email = '', officeNumber = '') {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  };
};

// create code block and return to function call
Manager.prototype.managerHTML = function() {
  return `
  <div class="col-4 my-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Email:</p>
        <p class="card-text">Id:</p>
        <p class="card-text">Role:</p>
      </div>
    </div>
  </div>
  `
  // console.log('data received!');
  // console.log(this.role);
  // console.log(this.name);
  // console.log(this.id);
  // console.log(this.email);
  // console.log(this.officeNumber);
};

module.exports = Manager;

// original test passing code:

// class Manager extends Employee {
//   constructor(name = '', id = '', email = '', officeNumber = '') {
//     super(name, id, email);
//     this.officeNumber = this.getOfficeNumber(officeNumber);
//     this.role = this.getRole();
//   };

//   getOfficeNumber(officeNumInput) {
//     return officeNumInput;
//   };

//   getRole() {
//     return 'Manager';
//   };
// };

// module.exports = Manager;