// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your Github email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a description of your project, detailing the what, why and how of your project ',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What steps are required to install your project',
        name: 'installation',
      },
      {
        type: 'checkbox',
        message: 'Select the type of license for your project!',
        name: 'license',
        choices: [
            { name: 'none', value: 'none' },
            { name: 'Apache 2.0', value: 'apache' },
            { name: 'GNU General v3.0', value: 'gnu3' },
            { name: 'MIT', value: 'mit' },
            { name: 'BSD 2-Clause Simplified', value: 'bsd2' },
            { name: 'BSD 3-Clause Revised', value: 'bsd3' },
            { name: 'Boost Software 1.0', value: 'boost' },
            { name: 'Creative Commons Zero v1.0', value: 'creative' },
            { name: 'Eclipse Public 2.0', value: 'eclipse' },
            { name: 'GNU Affero v3.0', value: 'gnuAffero' },
            { name: 'GNU General v2.0', value: 'gnu2' },
            { name: 'Mozilla Public 2.0', value: 'mozilla' },
            { name: 'The Unlicense', value: 'unlicense' },
        ]
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'dependencies',
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw new Error(err);
    console.log("Readme Generated!")
})
};

// TODO: Create a function to initialize app
function init() {
  console.log('Welcome to My README Generator!\nPlease answer the following questions to generate your own custom README!');

  inquirer.prompt(questions)
  .then(readMe => {
      writeToFile("./demo/readme.md", generateMarkdown(readmeData))
  })

};

// Function call to initialize app`
init();
