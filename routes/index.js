var express = require('express');
const router = express.Router();

const {index,detail} = require('../controllers/indexController');


router.get('/',index);
router.get('/detalleMenu/:id',detail);

module.exports = router;
