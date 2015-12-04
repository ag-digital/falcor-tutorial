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

## Tasks

//TODO

For more information on Falcor please see http://netflix.github.io/falcor/starter/what-is-falcor.html
