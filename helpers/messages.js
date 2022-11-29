require('colors');


const mostrarMenu = () => {

  return new Promise(resolve => {
    console.clear();
    console.log('============================='.green);
    console.log('    Seleccione una opción'.green);
    console.log('============================='.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tarea`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar`);
    console.log(`${'0.'.green} Salir\n`);

    const readline = require('readline').createInterface({
      // Se pausa para que el usuario instroduca o elija una opcion y presione enter
      input: process.stdin,
      // Muestra algo de acuerdo a la opcion que elijio el usuario
      // Muestra un mensaje en la consola deacuerdo a lo que le pida al usuario
      output: process.stdout
    });

    readline.question('Selecciones una opción: ', (opt) => {
      // console.log(opt);
      readline.close();
      resolve(opt);
    })
  });

}

const pausa = () => {

  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    // Se pausa hasta que se presione enter
    readline.question(`\nSelecciones ${'ENTER'.green} para continuar\n`, (opt) => {
      // console.log(opt);
      readline.close();
      resolve(opt);
    })
  });

}

module.exports = {
  mostrarMenu,
  pausa
}