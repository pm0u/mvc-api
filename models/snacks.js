const knex = require('../knex.js')

const getAll = function (db) {
  knex(db).select('name','id','type').then(snacks =>{
    return snacks
  })
}


module.exports = {
  getAll
}
