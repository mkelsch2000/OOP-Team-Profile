const Employee = require('../lib/Employee');

// test for employee properties and methods
test('checks for employee constructor content', () => {
  const employee = new Employee('Jane', '55555', 'Jane@gmail.com');

  expect(employee.name).toBe('Jane');
  expect(employee.id).toBe('55555');
  expect(employee.email).toBe('Jane@gmail.com');
  expect(employee.role).toBe('Employee');
});

// test('checks if employee has a name', () => {
//   const employee = new Employee('Jane', '2123', 'me@me.com');
//   console.log(employee.email);
//   console.log(employee.getEmail());
//   console.log(employee.getEmail('pinky'));

//   expect(employee).toHaveProperty('name');
// });

// test('checks to see if employee has id', () => {
//   const employee = new Employee('Jane');

//   expect(employee).toHaveProperty('id');
// });

// test('checks to see if employee has email', () => {
//   const employee = new Employee('Jane');

//   expect(employee).toHaveProperty('email');
// });

// test('checks to see if employee has a role', () => {
//   const employee = new Employee('Jane');

//   expect(employee).toHaveProperty('role');
// });