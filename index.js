const jsonServer = require('json-mock');
const server = jsonServer.create();
server.use(jsonServer.defaults);
server.use(jsonServer.router('data/db.json'));

server.listen(3000);
