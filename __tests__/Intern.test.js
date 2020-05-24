const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('check is name is string', () =>{
    const name = new Intern("connor", "123", "email", "school")
    expect(name.name).toBe("connor")
    expect(name.id).toBe("123")
    expect(name.email).toBe("email")
    expect(name.school).toBe('school')
})