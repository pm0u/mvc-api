var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/snacks')

/* GET home page. */

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.post)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.del)

module.exports = router
