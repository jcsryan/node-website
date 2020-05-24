const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
};

module.exports = Engineer