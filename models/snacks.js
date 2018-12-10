const knex = require('../knex.js')
const selection = [ 'name', 'id', 'type']

const getAll = function (db) {
  return knex(db).select(selection)
}

const getOne = function (db, id) {
  return knex(db).select(selection).where({ id }).first()
}

const post = function (db, snack) {
  return knex(db).insert(snack, selection)
}

const update = function (db, snack, id) {
  return knex(db).where({ id }).update(snack, selection)
}

const del = function (db, id) {
  return knex(db).where({ id }).first().then(delSnack => {
    return knex(db).where({ id }).first().delete().then( useless => {
      return delSnack
    })
  })
}


module.exports = {
  del,
  update,
  post,
  getAll,
  getOne
}
