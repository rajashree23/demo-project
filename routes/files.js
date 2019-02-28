const express = require('express');
const router = express.Router();
// lets assume posts is being fetched from database
const posts = require('../posts.js');
const fileCtrl = require('../controller/files');


/* GET . */
router.get('/click', fileCtrl.downloadCsv);


module.exports = router;
