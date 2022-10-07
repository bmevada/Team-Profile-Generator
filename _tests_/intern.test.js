const { Intern } = require('../lib/Intern');

test('Create new Intern', () => {
    const employee = new Intern('Interns Name', 1234, 'internname@employee.com', 'school');

    expect(employee.name).toBe("Interns Name");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Check for Interns class', () => {
    const employee = new Intern('Interns Name', 1234, 'internname@employee.com', 'school');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})