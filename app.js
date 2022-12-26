require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// const {mostrarMenu, pausa}  = require('./helpers/messages');

console.clear();

const main = async() => {
  console.log('Hola Mundo');

  let opt = '';

  // Ciclo que mantiene el menu iterativo din que se cierre
  do{
    // aqui se trae el id de la opcion que elejimos
    opt = await inquirerMenu();
    console.log({opt});

    // const tareas = new Tareas();
    // const tarea = new Tarea('Comprar comida');
    // creamos un listado de objetos de tareas con identificador id:uuidv4
    // Por cada tarea hay un objeto con un identificador uuidv4
    // tareas._listado[tarea.id] = tarea;
    // console.log(tareas)

    await pause();
  }while (opt !== '0');

}



main();