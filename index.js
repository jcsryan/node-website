const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./src/page-template')
let pushArray = []

const promptProject = portfolioData => {
   
    if(!portfolioData){
       pushArray = [];
    }

 return inquirer
.prompt([
    {
        type: 'input',
        name: 'position',
        message: 'What is your position?: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github address?: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'confirm',
        name: 'confirmAddUser',
        message: "Would you like to enter another user?",
        default: false
    }
])

/* .then(projectData => {
    pushArray.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData)
    } else {
        return portfolioData;
      }
    }); */
}

    promptProject()
    .then(portfolioData =>{ 
        const pageHTML = generatePage(portfolioData)
    .then(
    fs.writeFile('./index.html', pageHTML, err => {
        if(err) throw new Error(err);
        console.log('Page created! Check out index.html in this directory to see it!');
    }))
    
    
})
