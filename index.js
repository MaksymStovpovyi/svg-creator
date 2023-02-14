const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter 3 letters --> ',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter text color --> ',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose a shape',
      choices: ['circle', 'triangle', 'square'],
      name: 'shape',
    },
    {
      type: 'input',
      message: "Enter shape color --> ",
      name: 'shapeColor',
    }
  ])
  .then((response) => {
    const { text, textColor, shape, shapeColor } = response;
    fs.writeFile('./examples/logo.svg', `
    `, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
    );
  }
);