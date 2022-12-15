var express = require('express');
var router = express.Router();

const controller =require('../controllers/employee.controller')

router.post('/postEmployee',controller.addEmployeeDetailsRequest)

router.get('/',controller.getEmployeeAndRolesRequest)

module.exports = router