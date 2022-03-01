const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateHTML = require('../utils/generateHTML.js');

const employeeGroup = [];

function Questions() {
  this.employee
  // this.manager
  // this.engineer
  // this.intern
};

// asks for the employee's name
Questions.prototype.getName = function() {
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

      this.getId();
    });
};

// asks for the employee's id
Questions.prototype.getId = function() {
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

      this.getEmail();
    });    
};

// asks the user for the employee's email
Questions.prototype.getEmail = function() {
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

      this.getRole();
    });
};

// Ask the user if the employee has any other positions aside from employee
Questions.prototype.getRole = function() {
  inquirer
    .prompt({
      type: 'confirm',
      name: 'employeePosition',
      message: "Does this employee have any of the following positions: Manager, Engineer, Intern?"
    })
    .then (({ employeePosition}) => {
      if (!employeePosition) {
        // create html content using what we have without any further position
        console.log(this.employee);
        let employeeBlock = this.employee.employeeHTML(this.employee)
        console.log(employeeBlock);
        employeeGroup.push(employeeBlock);
        reRunQuestions();
      } else {
        inquirer
          .prompt({
            type: 'checkbox',
            name: 'position',
            message: "Which position does your employee hold?",
            choices: [
              "Manager",
              "Engineer",
              "Intern"
            ]
          })
          .then (({ position }) => {
            switch(position[0]) {
              case "Manager":
                this.getOfficeNumber();
                break;
                // callback to manager
              case "Engineer":
                this.getGithub();
                break;
                // callback to engineer
              case "Intern":
                this.getSchool();
                break;
                // callback to intern
          }
        })
      };
    });
};

// if the employee is a manager, run this function
Questions.prototype.getOfficeNumber = function() {
  inquirer
    .prompt({
      type: 'input',
      name: 'officeNumber',
      message: "What is your managers office number?",
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log("You must enter your manager's office number!");
          return false;
        }
      }
    })
    // after asking questions, fullfil promise, and destructure dat from objects, then push to new class instance
    .then (({ officeNumber }) => {
      const { name, id, email } = this.employee
      let managerBlock = new Manager(name, id, email, officeNumber).managerHTML();
      console.log(managerBlock)
      employeeGroup.push(managerBlock);
      reRunQuestions();
    });
};

// if the employee is an engineer, run this function
Questions.prototype.getGithub = function() {
  inquirer
   .prompt({
     type: 'input',
     name: 'github',
     message: "What is your engineer's github?",
     validate: nameInput => {
       if(nameInput) {
         return true;
       } else {
         console.log("You need to enter your engineer's github username!")
         return false;
       }
     }
   })
   // after asking questions, fullfil promise, and destructure dat from objects, then push to new class instance
   .then (({ github }) => {
     const { name, id, email } = this.employee
     let engineerBlock = new Engineer(name, id, email, github).engineerHTML();
     console.log(engineerBlock);
     employeeGroup.push(engineerBlock);
     reRunQuestions();
   })
};

// if the employee is an intern, run this function.
Questions.prototype.getSchool = function() {
  inquirer
    .prompt({
      type: 'input',
      name: 'school',
      message: "What is your intern's school?",
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log("You need to enter the name of your intern's school!");
          return false;
        }
      }
    })
    // after asking questions, fullfil promise, and destructure data from objects, then push to new class instance
    .then (({ school }) => {
      const { name, id, email } = this.employee
      let internBlock = new Intern(name, id, email, school).internHTML();
      console.log(internBlock);
      employeeGroup.push(internBlock);
      reRunQuestions();
    })
};

// add another employee, or generate html from array of employees
const reRunQuestions = function() {
  // confirm whether the user wants to add another employee or not
  inquirer
   .prompt({
     type: 'confirm',
     name: 'nextQuestion',
     message: 'Would you like to add another employee?',
     default: false
   })
   // fulfill promise by either calling for a new Question or generating html
   .then (({ nextQuestion }) => {
     if (nextQuestion) {
       console.log(employeeGroup);
       new Questions().getName();
     } else {
       console.log(employeeGroup);
       // call generatehtml function using array data.
     }
   })
}

module.exports = Questions;