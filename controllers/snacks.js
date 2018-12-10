const model = require('../models/snacks')

const getAll = function (req, res, next) {
    model.getAll('snacks').then(snacks => {
      res.status(200).json({ data: snacks })
    })

}

const getOne = function (req, res, next) {
  const id = req.params.id
  model.getOne('snacks', id).then(snack => {
    res.status(200).json({ data: snack })
  })
}

const post = function (req, res, next) {
  const snack = req.body
  console.log(snack)
  model.post('snacks', snack).then(snackInserted => {
    res.status(201).json({ data: snackInserted })
  })
}

const update = function (req, res, next) {
  const id = req.params.id
  const snack = req.body
  model.update('snacks', snack,id).then(snackUpdated => {
    res.status(201).json({ data: snackUpdated })
  })
}

const del = function (req, res, next) {
  const id = req.params.id
  model.del('snacks', id).then(delSnack => {
    res.status(201).json({ data: delSnack })
  })
}


module.exports = {
  del,
  update,
  post,
  getAll,
  getOne
}
