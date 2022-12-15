var express = require('express');
var router = express.Router();
// var app = express();


const rolesRouter = require('../routes/roles.router');
const employeeRouter = require('../routes/employee.router');

// const { Router } = require('express');
// router.use('/roles',rolesRouter)
// router.use('/employee',employeeRouter)

var routing =[
    {
    path :'/roles',
    router :rolesRouter,
    },
    {
    path :'/employee',
    router :employeeRouter,
    }
]
routing.forEach((route) => {
    router.use(route.path,route.router);
});
module.exports = router;