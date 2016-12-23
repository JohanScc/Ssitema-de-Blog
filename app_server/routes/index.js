var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/main');
var ctrlOthers = require('../controller/others');

router.get('/', ctrlMain.index);
router.get('/about', ctrlOthers.about);

module.exports = router;
