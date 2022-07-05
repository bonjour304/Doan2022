const express = require('express');
const rulesController = require('./../controllers/rulesController');
const authController = require('./../controllers/authController');
const router = express.Router();
const exportsData = require('./../dev-data/data/export-dev-data')

//router.param('id', rulesController.checkID);

router.use(authController.protect);
router
  .route('/')
  .get(authController.restrictTo('admin', 'developer'),rulesController.getAllRules)
  .post(authController.restrictTo('admin', 'developer'),rulesController.createRule)
router
  .route('/export')
  .get(authController.restrictTo('admin', 'developer'),exportsData.exportRules)
router
  .route('/:id')
  .get(authController.restrictTo('admin', 'developer'),rulesController.getRule)
  .patch(authController.restrictTo('admin', 'developer'),rulesController.updateRule)
  .delete(authController.restrictTo('admin', 'developer'),rulesController.deleteRule);

module.exports = router;
