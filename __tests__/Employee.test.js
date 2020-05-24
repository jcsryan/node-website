const Employee = require('../lib/Employee')

test('check is name is string', () =>{
    const name = new Employee("connor", "123", "email")
    expect(name.name).toBe("connor")
    expect(name.id).toBe("123")
    expect(name.email).toBe("email")
})