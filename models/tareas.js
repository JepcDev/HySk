/*
  * _listado:
  *     {'uuid-12313-313123-2: {id:12, desc:asd, completadoEn:123122} },
  *     {'uuid-12313-313123-2: {id:12, desc:asd, completadoEn:123122} },
  *     {'uuid-12313-313123-2: {id:12, desc:asd, completadoEn:123122} },
  *
*/

const Tarea = require("./tarea");

class Tareas {

  _listado = {};

  // DEV get listadoArr
  //para no exponer al _listado se transformar un objeto a un arreglo con un getter
  get listadoArr() {
    // recorrer cada llave del listado , cada listado es una tarea que se tiene que hacer
    let listado = [];
    // Extraer las llaves que hay en un objeto, regresa un arreglo con todas las llaves del objeto
    Object.keys(this._listado).forEach(
      // convertimos de objeto de las tareas a un array con las tareas
      key => {
        const tarea = this._listado[key];
        listado.push( tarea );
      }
    );
    // retornamos el array con las tareas
    return listado;
  }

  // DEV constructor
  constructor(){
    this._listado = {};
  }

  //DEV cargarTareasFromArray
  cargarTareasFromArray( tareas = [] ){
    tareas.forEach( tarea => {
      this._listado[tarea.id] = tarea;
    });
  }

// DEV crearTarea
  crearTarea(desc ='') {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  // Listamos todas las tareas con un formato especial
  ListadoCompleto() {
    this.listadoArr.forEach((tarea, i) =>{
      const idx = `${i + 1}`.green;
      const {desc, completadoEn} = tarea;
      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${idx}. ${desc}:: ${estado}` );
    });
    // 1: en verde
    // Completada : verde
    // Pendiente: rojo
    // 1. Alma ::Completada | Pendiente
    // 2. Realidad ::Completada | Pendiente
    // 3. Poder ::Completada | Pendiente

  }
}


module.exports = Tareas;