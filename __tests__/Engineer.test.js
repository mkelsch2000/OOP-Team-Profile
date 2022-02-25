const Engineer = require('../lib/Engineer');

// test for engineer properties and methods
test('checks for engineer constructor content', () => {
  const engineer = new Engineer('Jane', '55555', 'Jane@gmail.com', 'CoolPub');

  expect(engineer.name).toBe('Jane');
  expect(engineer.id).toBe('55555');
  expect(engineer.email).toBe('Jane@gmail.com');
  expect(engineer.github).toBe('CoolPub');
  expect(engineer.role).toBe('Engineer');
});

// test('checks if engineer has a name', () => {
//   const engineer = new Engineer('Jane');

//   expect(engineer.getName()).toHaveProperty('name');
// });

// test('checks to see if engineer has id', () => {
//   const engineer = new Engineer('Jane');

//   expect(engineer.getId()).toHaveProperty('id');
// });

// test('checks to see if engineer has email', () => {
//   const engineer = new Engineer('Jane');

//   expect(engineer.getEmail()).toHaveProperty('email');
// });

// test('checks to see if engineer has a role', () => {
//   const engineer = new Engineer('Jane');

//   expect(engineer.getRole()).toHaveProperty('role');
// });