'use strict'

const model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')})
model
  .get(['items', {from: 0, to: 1}, 'name'])
  .then((response) => {
    let itemsList = [] 
    Object.keys(response.json.items).forEach((item) => {
      itemsList.push(response.json.items[item].name) 
    })
    document.getElementById("main").innerHTML = JSON.stringify(itemsList, null, 2)
  })

  
