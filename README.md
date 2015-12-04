# Falcor Tutorial

[Falcor](http://netflix.github.io/falcor/) was designed by Netflix and allows you to model your backend data as a single JSON resource.

The advantage of this is you only have to hit one endpoint <i>(model.json)</i> to retrieve all of the data that the client needs, therefore only making a single request.

For example, sending a GET request to ```/model.json?paths=["item.id", "item.name", "item.description"]``` would return the item id, name and description.
This improves performance significantly as it reduces subsequent calls to your server.

Falcor works by defining a set of routes which returns a certain subset of data. These routes outline what queries your falcor server accepts.
For example the following route will return this JSON resource: ``` {"json":{"greeting":"Hello World"}}```

```
{
  route: "greeting",
  get: () => {
    return {path:["greeting"], value: "Hello World"}
  }
}
```

## To get started

* git clone the project
* run `npm install`
* run `npm start`
* Tests can be run using `npm test`

You can then browse to the site by going to `http://localhost:3000`

A get request is sent to the falcor server in `app.js`. A [Hapi](https://github.com/hapijs/hapi) route has been setup in `index.js` which directs the request to the falcor router.
The falcor router is defined in `AppFalcorRouter.js`.

## Tasks

* A test that retrieves data from the `data/cities.json` file is currently failing. Your task is to implement the correct route in the `routes/index.js` file to make this test pass. 
* Add a new route to the `routes/index.js` file that allows the app to retrieve data from the `data/cities.json` file. The examples in `routes/index.js` should give you an idea of how to go about this.
* To test the new route run `npm test`.
* If all tests are passing, you have completed this tutorial =)

Tested on Node V4.2.1<br/>
For more information on Falcor please see http://netflix.github.io/falcor/starter/what-is-falcor.html
