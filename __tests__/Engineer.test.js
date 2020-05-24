const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('check is name is string', () =>{
    const name = new Engineer("connor", "123", "email", "github")
    expect(name.name).toBe("connor")
    expect(name.id).toBe("123")
    expect(name.email).toBe("email")
    expect(name.github).toBe("github")
})