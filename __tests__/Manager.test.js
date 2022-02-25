const Manager = require('../lib/Manager');

// test for manager properties and methods
test('checks for manager constructor content', () => {
  const manager = new Manager('Jane', '55555', 'Jane@gmail.com', '12');

  expect(manager.name).toBe('Jane');
  expect(manager.id).toBe('55555');
  expect(manager.email).toBe('Jane@gmail.com');
  expect(manager.officeNumber).toBe('12');
  expect(manager.role).toBe('Manager');
});

