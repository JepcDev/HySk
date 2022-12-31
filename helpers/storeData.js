const fs = require('fs');

const path = './db/data.json'

const storeData = (data) => {
  fs.writeFileSync(path, JSON.stringify(data) );
}

// lee las tareas que tenemos guardadas en algun archivo
const readData = () => {
  if (!fs.existsSync(path)) {
    return null;
  }

    const inf = fs.readFileSync(path, {encoding: 'utf-8'});
    const data = JSON.parse(inf);
    console.log(data);
    return data;

}


module.exports = {storeData, readData}