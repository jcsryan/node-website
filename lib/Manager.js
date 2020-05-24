const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
      super();
       this.name = name;
       this.id = id;
       this.email = email;
       this.officeNum = officeNum
    }
};

module.exports = Manager