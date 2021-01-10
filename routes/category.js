const express = require('express');
const router = express.Router();
const controller = require('../controllers/category');
const tokenValidate = require('../token_validate');


router.post('/api/add', tokenValidate, controller.add);
router.post('/api/edit', controller.edit);
router.get('/api/all', controller.getAll);
router.get('/api/id', controller.getById);
router.get('/api/delete', controller.deleteById);


module.exports = router;
