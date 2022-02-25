const Intern = require('../lib/Intern');

// test for intern properties and methods
test('checks for intern constructor content', () => {
  const intern = new Intern('Jane', '55555', 'Jane@gmail.com', 'Hogwarts');

  expect(intern.name).toBe('Jane');
  expect(intern.id).toBe('55555');
  expect(intern.email).toBe('Jane@gmail.com');
  expect(intern.school).toBe('Hogwarts');
  expect(intern.role).toBe('Intern');
});