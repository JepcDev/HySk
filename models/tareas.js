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

  constructor(){
    this._listado = {};
  }

  crearTarea(desc ='') {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;