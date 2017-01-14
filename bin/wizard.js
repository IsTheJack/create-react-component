#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const argv = require('minimist')(process.argv.slice(2));
const inquirer = require('inquirer');


const statelessComponent = require('../templates/statelessComponent');
const classComponent = require('../templates/classComponent');

const componentTypes = {
  classComponent: 'Class Component',
  statelessComponent: 'Stateless Component'
};

const firstQuestion = {
  type: 'list',
  name: 'componentTypes',
  message: 'Choose the component type',
  choices: [
    componentTypes.classComponent,
    componentTypes.statelessComponent
  ],
};

const defaultComponentPath = './src/components'
const componentName = argv._[0] && argv._[0].replace(/\.js$/, '');
const componentPath = path.resolve(argv._[1] || defaultComponentPath);
const fileName = `${componentPath}/${componentName}.js`;

const pathAlreadyExists = fs.existsSync(componentPath);
const fileAlreadyExists = fs.existsSync(fileName);


if(componentName && pathAlreadyExists && !fileAlreadyExists) {
  console.log(`It will create the file '${fileName}'...`);

  inquirer.prompt([firstQuestion]).then(function (answers) {
    switch(answers.componentTypes) {
      case componentTypes.classComponent:
        fs.writeFileSync(fileName, classComponent(componentName));
        break;
      case componentTypes.statelessComponent:
        fs.writeFileSync(fileName, statelessComponent(componentName));
        break;
    }
  });

}
