const fs = require('fs');

const path = './db/data.json'

// Guarda la data de las tareas en un archivo json
const storeData = (data) => {
  fs.writeFileSync(path, JSON.stringify(data) );
}

// lee las tareas que tenemos guardadas en algun archivo
const readData = () => {
  // verificamos si existe el archivo
  if (!fs.existsSync(path)) {
    return null;
  }
    // En caso de que exista leemos la data o el contenido del archivo
    const inf = fs.readFileSync(path, {encoding: 'utf-8'});
    const data = JSON.parse(inf);
    // console.log(data);
    return data;

}


module.exports = {storeData, readData}