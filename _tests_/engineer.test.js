const Engineer = require('../lib/Engineer');

test('Create new Engineer', () => {
  const employee = new Engineer('Engineers Name', 1234, 'engineername@employee.com', 'engineers-name');

  expect(employee.name).toBe("Engineers Name");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
})

test('Checks for Engineer class', () => {
  const employee = new Engineer('Engineers Name', 1234, 'engineername@employee.com', 'engineers-name');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})