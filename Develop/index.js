// // TODO: Include packages needed for this application


// // TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
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
        choices: [
            { name: 'none', value: 'none' },
            { name: 'Apache 2.0', value: 'apache' },
            { name: 'GNU General v3.0', value: 'gnu3' },
            { name: 'MIT', value: 'MIT' },
            { name: 'BSD 2-Clause Simplified', value: 'bsd2' },
            { name: 'BSD 3-Clause Revised', value: 'bsd3' },
            { name: 'Boost Software 1.0', value: 'boost' },
            { name: 'Creative Commons Zero v1.0', value: 'creative' },
            { name: 'Eclipse Public 2.0', value: 'eclipse' },
            { name: 'GNU Affero v3.0', value: 'gnuAffero' },
            { name: 'GNU General v2.0', value: 'gnu2' },
            { name: 'GNU Lesser General v2.1', value: 'gnuless' },
            { name: 'Mozilla Public 2.0', value: 'mozilla' },
            { name: 'The Unlicense', value: 'unlicense' },
        ]
      },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app`
init();
