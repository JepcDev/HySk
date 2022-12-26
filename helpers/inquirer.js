const inquirer = require('inquirer');
// import inquirer from 'inquirer';
require('colors');

const optionQestion = [
  {
    type : 'list',
    name: 'option',
    message: '¿What do you want to do?',
    choices: ['opt1','opt2','opt3']
  }
];

const inquirerMenu = async() => {
  console.clear();
  console.log('============================='.green);
  console.log('    Seleccione una opción'.green);
  console.log('============================='.green);

  // aqui va la lista de las preguntas de la app
  const opt = await inquirer.prompt(optionQestion);
  return opt;
}

module.exports = {
  inquirerMenu
}