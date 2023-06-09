const Router = require('express')
const suppliesController = require('../controller/supplies.controller')
const router = new Router()

router.get('/supplies', suppliesController.getSupplies)
router.get('/supplies/:id', suppliesController.getSupply)
router.post('/supplies', suppliesController.createSupply)
router.put('/supplies/:id', suppliesController.editSupply)
router.delete('/supplies/:id', suppliesController.deleteSupply)

module.exports = router