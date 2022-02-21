const express = require('express')

const PoliticianCtrl = require('../controllers/politician-ctrl')

const router = express.Router()

router.post('/politician', PoliticianCtrl.createPolitician)
router.put('/politician/:id', PoliticianCtrl.updatePolitician)
router.delete('/politician/:id', PoliticianCtrl.deletePolitician)
router.get('/politician/:id', PoliticianCtrl.getPoliticianById)
router.get('/politicians', PoliticianCtrl.getPoliticians)

module.exports = router