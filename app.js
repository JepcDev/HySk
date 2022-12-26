require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');

// const {mostrarMenu, pausa}  = require('./helpers/messages');

console.clear();

const main = async() => {
  console.log('Hola Mundo');

  let opt = '';

  // Ciclo que mantiene el menu iterativo din que se cierre
  do{

    opt = await inquirerMenu();
    console.log({opt});

    await pause();
  }while (opt !== '0');

}



main();