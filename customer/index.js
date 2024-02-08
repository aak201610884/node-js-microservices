const express = require('express');
const { PORT } = require('./src/config');
const StartServer = async() => {

  const app = express();
  


  app.listen(PORT, () => {
        console.log(`listening to customer port ${PORT}`);
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