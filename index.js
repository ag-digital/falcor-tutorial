var AppFalcorRouter = require('./AppFalcorRouter');
var FalcorServer = require('falcor-hapi');
var Hapi = require('hapi');
var Inert = require('inert');
var path = require('path');

var server = new Hapi.Server();
var port = 3000;

server.connection({
  port: port
});

server.register(Inert, function (err) {
  if(err) console.log(err);
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join(__dirname, './')
    }
  }
});

server.route({
  method: 'GET',
  path: '/model.json',
  handler: FalcorServer.dataSourceRoute(function (req, res) {
    return AppFalcorRouter();
  })
});  

server.start(function () {
  console.log('Listening on http://localhost:' + port);  
});
