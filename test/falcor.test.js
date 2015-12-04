'use strict'
import test from 'ava'
import Falcor from 'falcor'
import HttpDataSource from 'falcor-http-datasource'
import server from '../server.js'
import R from 'ramda'

let falcorModel

test.before(t => {
  server.start(() => {
    falcorModel = new Falcor.Model({source: new HttpDataSource('http://localhost:3000/model.json'), errorSelector: (error) => error.$expires= -1000 * 60 * 2})
    console.log('Hapi server started')
    t.end()
  })
})

test.after(t => {
  server.stop(() => {
    t.end()
  })
})

test('falcor server server returns greeting', t => {
  const query = ['greeting']
  falcorModel.get(query).then(response => {
    const json = response.json
    t.same(json.hasOwnProperty('greeting'), true)
    t.same(json.greeting, 'Hello World')
    t.end()
  }).catch(err => {
    t.fail(err.message)
    t.end()
  })
})

test('falcor server returns items array', t => {
  const query = ["items", {from: 0, to: 1}, "name"]
  falcorModel.get(query).then(response => {
    const items = response.json.items
    t.same(R.keys(items).length, 2)
    R.forEach(item => {
      item = items[item]
      t.same(item.hasOwnProperty('name'), true)
    }, R.keys(items))
    t.same(items['0'].name, 'Item 1')
    t.same(items['1'].name, 'Item 2')
    t.end()
  }).catch(err => {
    t.fail(err.message)
    t.end()
  })
})

test('falcor server returns cities array', t => {
  const query = ["cities", {from: 0, to: 2}, "name"]
  falcorModel.get(query).then(response => {
    const cities = response.json.cities
    t.same(R.keys(cities).length, 3)
    R.forEach(city => {
      city = cities[city]
      t.same(city.hasOwnProperty('name'), true)
    })
    t.same(cities['0'].name, 'London')
    t.same(cities['1'].name, 'Paris')
    t.same(cities['2'].name, 'New York')
    t.end();
  }).catch(err => {
    t.fail(err.message)
    t.end()
  })
})



