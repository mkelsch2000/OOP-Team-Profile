const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Questions() {
  this.employee
};

// asks for the employee's name
Questions.prototype.nameQuestion = function() {
  inquirer
    .prompt({
      type: 'input',
      name: 'employeeName',
      message: "What is your employee's name?",
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log("You must enter your employee's name!");
          return false;
        }
      }
    })
    .then (({ employeeName }) => {
      this.employee = new Employee(employeeName);

      this.idQuestion();
    });
};

// asks for the employee's id
Questions.prototype.idQuestion = function() {
  inquirer
    .prompt({
      type: 'input',
      name: 'employeeId',
      message: "What is your employee's ID?",
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log("You must enter your employee's ID!");
          return false;
        }
      }
    })
    .then (({ employeeId }) => {
      this.employee.id = employeeId;

      console.log(this.employee);

      this.emailQuestion();
    });    
};

// asks the user for the employee's email
Questions.prototype.emailQuestion = function() {
  inquirer
    .prompt({
      type: 'input',
      name: 'employeeEmail',
      message: "What is your employee's email?",
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log("You must enter your employee's email!");
          return false;
        }
      }
    })
    .then (({ employeeEmail }) => {
      this.employee.email = employeeEmail;
      
      console.log(this.employee);
    });
}

module.exports = Questions;