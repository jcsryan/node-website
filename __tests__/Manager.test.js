const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('check is name is string', () =>{
    const name = new Manager("connor", "123", "email", "officeNum")
    expect(name.name).toBe("connor")
    expect(name.id).toBe("123")
    expect(name.email).toBe("email")
    expect(name.officeNum).toBe('officeNum')
})