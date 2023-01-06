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

  // DEV borrarTarea
  borrarTarea( id = '' ){

    if (this._listado[id]) {
      delete this._listado[id];
    }
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

  // DEV ListadoCompleto
  // Listamos todas las tareas con un formato especial
  listadoCompleto() {
    // vamos a recorrer cada elemento del array que nos devuelve listadoArr
    // El indice i por lo general inica en 0
    // El foreach como 2do argumento tiene un indice
    this.listadoArr.forEach((tarea , i) => {
      const idx = `${i + 1}.`.green;
      const {desc, completadoEn} = tarea;
      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red ;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
    // 1: en verde
    // Completada : verde
    // Pendiente: rojo
    // 1. Alma ::Completada | Pendiente
    // 2. Realidad ::Completada | Pendiente
    // 3. Poder ::Completada | Pendiente
  }

  // DEV - listarPendientesCompletadas
  listarPendientesCompletadas( completadas =  true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea , i)=>{
      const idx = `${i + 1}`.green;
      const {desc, completadoEn} = tarea;
      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red

      if (completadas) {
        if (completadoEn) {
          contador +=1;
          // o let idx = `${contador}.`.green;
          // console.log(`${(contador+'.').green} ${desc} :: ${completadoEn}`);
          // console.log(`${contador.toString().green} (${idx}) ${desc} :: ${completadoEn} `);
          console.log(`${(contador+'.').green} (${idx}) ${desc} :: ${completadoEn.green} `);
        }
      }else{
        if (!completadoEn) {
          contador +=1;
          // console.log(`${(contador+'.').green} ${desc} :: ${estado}`);
          // console.log(`${idx}. ${desc} :: ${estado}`);
          console.log(`${(contador+'.').green} (${idx}) ${desc} :: ${estado.green} `);
        }
      }
    });
  }
  // listarPendientesCompletadas( completadas =  true) {
  //   if (completadas) {
  //     this.listadoArr.forEach((tarea , i) => {
  //       const idx = `${i + 1}`.green;
  //       const {desc, completadoEn} = tarea;
  //       const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red ;
  //       if(completadoEn){
  //         console.log(`${idx}. ${desc} :: ${estado}`);
  //       }
  //     });
  //   }else{
  //     this.listadoArr.forEach((tarea , i) => {
  //       const idx = `${i + 1}`.green;
  //       const {desc, completadoEn} = tarea;
  //       const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red ;
  //       if(!completadoEn){
  //         console.log(`${idx}. ${desc} :: ${estado}`);
  //       }
  //     });
  //   }
  // }
}


module.exports = Tareas;