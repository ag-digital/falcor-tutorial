import fs from 'fs'
import R from 'ramda'

export default [
    {
      route: "greeting",
      get: () => {
        return {path:["greeting"], value: "Hello World"}
      }
    },
    {
      route: "items[{integers:itemIds}].name",
      get: (pathSet) => {
        return getData('items.json').then(data => {
          const jsonData = JSON.parse(data.toString())
          let results = []
          const pushResults = itemId => {
            const object = jsonData[itemId]
            results.push({
              path: ["items", itemId, pathSet[2]],
              value: object[pathSet[2]]
            })
          }
          R.forEach(pushResults, pathSet.itemIds)
          return results
        }, (err) => {
          if(err) return err
        })
      }
    }
  ]

const getData = (fileName) => {
  return new Promise((resolve, reject) => {
    return fs.readFile(__dirname + '/../data/' + fileName, (err, data) => {
      if (err) { return reject(err) }
      return resolve(data)
    });
  });
}
