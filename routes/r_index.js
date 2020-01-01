const express = require('express');
const router = express.Router();
const indexController = require('../controllers/c_index');

router.get('/', indexController.getIndexPage);

router.post('/create-item', indexController.postListItem);

router.post('/edit-item', indexController.editListItem);

router.post('/delete', indexController.deleteListItem);

module.exports = router;