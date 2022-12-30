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
        name: `${'1.'.green} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.green}Salir`
      },
    ]
  }
];

// Menu iterativo inquirer
const inquirerMenu = async() => {
  console.clear();
  console.log('============================='.green);
  console.log('    Seleccione una opción'.white);
  console.log('============================='.green);

  // aqui va la lista de las preguntas de la app
  // devuelve el numero o valor de la opcion que elegimos
  const {option}= await inquirer.prompt(optionQestion);
  return option;
}

// Pone en pausa el prompt hasta que presionemos enter
// DEV - pause
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

// DEV - leerInput
const leerInput = async(message)=> {
  const question = [
    {
      type: 'input',
      name: 'desc',
      // message : mensaje
      message,
      validate(value){
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];
  const {desc} = await inquirer.prompt(question);
  return desc;
}

// DEV - exports
module.exports = {
  inquirerMenu,
  pause,
  leerInput
}