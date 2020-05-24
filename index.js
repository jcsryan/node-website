//all require constants

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs');
const Employee = require('../node-website/lib/Employee')
const Manager = require('../node-website/lib/Manager')
const Engineer = require('../node-website/lib/Engineer')
const Intern = require('../node-website/lib/Intern')

//empty array I push the user data into creating multiple objects within the array.
let portfolioData = [];


//called at the end of inquirer prompts, givews selection of intern or engineer
//if either is called, runs the related inquirer prompt and saves that data to 
//portfolio data, if 'No' is called it created the index file and exports my 
//portfolio data to the page-template.js file
const chooseRole = () => {
   inquirer.prompt([
    {
      type: 'checkbox',
      name: 'role',
      message: 'Would you like to add another employee?',
      choices: ['Engineer', 'Intern', 'No']
    },
  ]).then((answer) => {
    //console.log(answer.role);
     if(answer.role == 'Engineer'){
      Engineer.prototype.PromptEngineer()
    } else if(answer.role == 'Intern'){
      Intern.prototype.PromptIntern()
    } else{
       const pageHTML = generatePage(portfolioData)
       fs.writeFile('./index.html', pageHTML, err => {
         if(err) throw new Error(err);
       })
    console.log("Check out the new HTML page")
      }
  })
}

//inquirer prompt if Engineer is chosen. the .then() at the bottom of the following
//3 prompts creates a lower-case version of the object as a variable with the user data
// and pushes it to portfoliodata.
Engineer.prototype.PromptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter your email.',
      
    },
    {
      type: 'input',
      name: 'github',
      message: 'enter your github name.',
    },
    
  ])
  .then((answers) => {
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    portfolioData.push(engineer)
    chooseRole();
  })
}


//inquirer prompt if intern is chosen
Intern.prototype.PromptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter your email.',
      
    },
    {
      type: 'input',
      name: 'school',
      message: 'enter your School name.',
    },
  ])
  .then((answers) => {
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    portfolioData.push(intern)
    chooseRole();
  })
}


//Inquirer prompt that automatically runs if node index.js is called in console
//will only run once per call as there can be only one manager.
Manager.prototype.PromptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
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
    {
     type: 'input',
     name: 'officeNum',
     message: 'Enter your officeNum',
    }
  ])
  .then((answers) => {
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
    portfolioData.push(manager)
    chooseRole();
  })
}



//calling the Manager prompt.
Manager.prototype.PromptUser()
