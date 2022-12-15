var express = require('express');
var router = express.Router();

const controller =require('../controllers/roles.controller')

router.post('/postRoles',controller.addrolesRequest);

router.put('/:id',controller.updateRolesRequest)

router.get('/getAll',controller.getAllrolesrequest)

module.exports = router;
