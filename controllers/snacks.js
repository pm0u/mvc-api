const model = require('../models/snacks')

const getAll = function (req, res, next) {
    const response = model.getAll('snacks')
    console.log(response)
    res.status(200).json({ data: response })

}


module.exports = {
  getAll
}
