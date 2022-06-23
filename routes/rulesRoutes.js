const express = require('express');
const rulesController = require('./../controllers/rulesController');

const router = express.Router();
const exportsData = require('./../dev-data/data/export-dev-data')

//router.param('id', rulesController.checkID);

router
  .route('/')
  .get(rulesController.getAllRules)
  .post(rulesController.createRule)
router
  .route('/export')
  .get(exportsData.exportRules)
router
  .route('/:id')
  .get(rulesController.getRule)
  .patch(rulesController.updateRule)
  .delete(rulesController.deleteRule);

module.exports = router;
