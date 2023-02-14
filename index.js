const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


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
    const { text, textColor, shapeColor ,shape} = response;
    
    let shapeIs;
    if (shape === 'circle') {
      shapeIs = new Circle(text, textColor, shapeColor, shape);
    } else if (shape === 'triangle') {
      shapeIs = new Triangle(text, textColor, shapeColor, shape);
    } else if (shape === 'square') {
      shapeIs = new Square(text, textColor, shapeColor, shape);
    }

    fs.writeFile('./examples/logo.svg', shapeIs.render(), (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
    );
  }
);