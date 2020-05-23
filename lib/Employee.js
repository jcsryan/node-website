const inquirer = require('inquirer');

function Name(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
}

Name.prototype.ask = function(){
  inquirer
  .prompt([
    {type: 'input',
    name: 'name',
    message: "what is the name?"
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'enter your email?',
    
  },
])
} 

module.exports = Name;