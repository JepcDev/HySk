const inquirer = require('inquirer');
// import inquirer from 'inquirer';
require('colors');

// Lista de opciones del usuario
const optionQestion = [
  {
    type : 'list',
    name: 'option',
    message: '¿What do you want to do?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea'
      },
      {
        value: '2',
        name: '2. Listar tareas'
      },
      {
        value: '3',
        name: '3. Listar tareas completadas'
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes'
      },
      {
        value: '5',
        name: '5. Completar tarea(s)'
      },
      {
        value: '6',
        name: '6. Borrar tarea'
      },
      {
        value: '0',
        name: '0. Salir'
      },
    ]
  }
];

// Menu iterativo inquirer
const inquirerMenu = async() => {
  console.clear();
  console.log('============================='.green);
  console.log('    Seleccione una opción'.green);
  console.log('============================='.green);

  // aqui va la lista de las preguntas de la app
  // devuelve el numero o valor de la opcion que elegimos
  const {option}= await inquirer.prompt(optionQestion);
  return option;
}

// Pone en pausa el prompt hasta que presionemos enter
const pause = async() => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ];

  console.log('\n');
  await inquirer.prompt(question);
}

module.exports = {
  inquirerMenu,
  pause
}