const fs = require('fs');

const storeData = (data) => {
  const path = './db/data.json'

  fs.writeFileSync(path, JSON.stringify(data) );
}

module.exports = storeData;