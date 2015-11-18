var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});
model
  .get('greeting')
  .then(function (response) {
    document.getElementById("main").innerHTML = JSON.stringify(response.json.greeting, null, 2);
  });
  