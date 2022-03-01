// creates Employee class
class Employee {
  constructor(name = '', id = '', email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }
};

// write/return block of code using collected data
Employee.prototype.employeeHTML = function() {
  return `
  <div class="col-4 my-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">Email: ${this.email}</p>
        <p class="card-text">Employee Id: ${this.id}</p>
        <p class="card-text">Role: ${this.role}</p>
      </div>
    </div>
  </div>
  `
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