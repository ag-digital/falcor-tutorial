import Router from 'falcor-router'
import routes from  './routes/index.js'

export default class FalcorRouter extends Router.createClass(routes) {
  constructor() {
    super()
  }
}
