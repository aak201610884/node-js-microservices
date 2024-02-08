const express = require('express');
const { PORT } = require('./src/config');
const {dbConnection}= require('./src/database')
const StartServer = async() => {
  const app = express();
await dbConnection()

  app.listen(PORT, () => {
        console.log(`listening to products port ${PORT}`);
  })
  .on('error', (err) => {
      console.log(err);
      process.exit();
  })
  .on('close', () => {
      channel.close();
  })
  
}

StartServer();