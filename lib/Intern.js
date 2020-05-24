const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
      super();
       this.name = name;
       this.id = id;
       this.email = email;
       this.school = school;
    }
};

module.exports = Intern