const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataContollers');

router.get('/logindata', dataController.getloginData);
router.get('/headerdata', dataController.getheaderData);
router.get('/myprofiledata', dataController.getmyprofileData);
router.get('/list', dataController.getlistData);
router.get('/fullscreen', dataController.getfullscreenData);

module.exports = router;
