const express = require('express');

const hubsRouter = require('../hubs/hubs-router.js'); //import and use it

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});
server.use('/api/hubs', hubsRouter);

// export defauly server, // ES6 Modules
module.exports = server; // <<<<< export the server
