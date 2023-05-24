// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project's description?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are your project's installation instructions?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is your project's usage information?",
    },
    {
        type: 'input',
        name: 'credits',
        message: "What are your project's credits?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What are your project's test instructions?",
    },
    {
        type: 'list',
        name: 'license',
        message: "What is your project's license?",
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'questions',
        message: "What are your project's questions?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What are your project's contribution guidelines?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile('README.md', generateMarkdown(response));
        });
}

// Function call to initialize app
init();
