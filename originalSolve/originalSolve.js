
const inquirer = require('inquirer');
const generatePage = require('../src/page-template');
const fs = require('fs');
const Employee = require('../lib/Employee')


//This was the original way I solved the project, but because it
//didn't use classes I discarded it and worked on what I have now.

 PromptUser = () => {
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
        name: 'github',
        message: 'Enter your GitHub Username'
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
       type: 'checkbox',
       name: 'position',
       message: 'Enter your position',
       choices: ['Manager']
      }
    ]);
}



promptProject = portfolioData => {
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    console.log(`
  =================
    New Employee
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide employee ID',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the ID!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What is the employee position?',
        choices: ['Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the employee GitHub name (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Enter employee email',
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]).then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
    
  
  }  


PromptUser()
  .then(promptProject)
  .then(portfolioData => {
     const pageHTML = generatePage(portfolioData);

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);

     console.log('Page created! Check out index.html in this directory to see it!');
     });
  });

