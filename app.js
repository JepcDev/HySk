require('colors');

const { inquirerMenu, pause, leerInput } = require('./helpers/inquirer');
const {storeData, readData} = require('./helpers/storeData');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// const {mostrarMenu, pausa}  = require('./helpers/messages');

console.clear();

const main = async() => {
  // console.log('Hola Mundo');

  let opt = '';
  const tareas = new Tareas();

  // leer tareas guardadas
  const tareasDB = readData();
  if (tareasDB) {//Cargar tareas
    // Establecer las tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

  // await pause();
  // Ciclo que mantiene el menu iterativo din que se cierre
  do{
    // aqui se trae el id de la opcion que elejimos
    // Crea y imprime el menu
    opt = await inquirerMenu();
    // console.log({opt});

    // const tareas = new Tareas();
    // const tarea = new Tarea('Comprar comida');
    // creamos un listado de objetos de tareas con identificador id:uuidv4
    // Por cada tarea hay un objeto con un identificador uuidv4
    // tareas._listado[tarea.id] = tarea;
    // console.log(tareas)
    switch (opt) {
      case '1':
        //crear oppion
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea(desc);
      break;
      case'2':
        // console.log(tareas.listadoArr);
        tareas.ListadoCompleto();
      break;
    }

    // Guarda el listado de tareas en un archivo
    storeData(tareas.listadoArr);
    await pause();
  }while (opt !== '0');

}



main();