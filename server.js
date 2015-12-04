'use strict'

import AppFalcorRouter from './AppFalcorRouter'
import FalcorServer from 'falcor-hapi'
import Hapi from 'hapi'
import Inert from 'inert'
import path from 'path'

const server = new Hapi.Server()
const port = 3000

export default server

server.connection({
  port: port
});

server.register(Inert, (err) => {
  if(err) console.log(err);
})

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join(__dirname, './')
    }
  }
})

server.route({
  method: 'GET',
  path: '/model.json',
  handler: FalcorServer.dataSourceRoute(() => new AppFalcorRouter())
})

server.start(() => {
  console.log('Listening on http://localhost:' + port)  
})
