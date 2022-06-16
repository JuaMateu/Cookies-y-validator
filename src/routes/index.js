var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
const { check } = require('express-validator')


const validations = [
    check('name').notEmpty().withMessage("Debes completar el nombre"),
    check('color').notEmpty().withMessage("Debes completar el color"),
    check('email').notEmpty().withMessage("Debes completar el email"),
    check('age').isNumeric().withMessage("la edad debe ser un numero")
] 

/* GET home page. */
router.get('/', controller.index);
router.post('/',validations,  controller.store);

module.exports = router;
