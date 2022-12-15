const employeeService = require('../services/employee.services')
const httpStatus = require("http-status");

//1.add employee Details
const addEmployeeDetailsRequest = async (req, res,) => {
    try{
      const  Fname =req.body.Fname;
      const Lname= req.body.Lname;
      const  Email= req.body.Email;
      const  rolesid= req.body.rolesid ? req.body.rolesid : false;

      const result = await employeeService.addEmployeeDetails( Fname,Lname,Email,rolesid);
      res.status(200).send({success : true,data : result});
    }catch(error){
      switch(error){
        case 'employee details is required':
          res
          .status(400)
          .send({sucess:false,error:'employee details is required!'})
          break;
          default:
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
            break;
        }
  }
  };
  
  //2.get employeeRoles(both)
  const getEmployeeAndRolesRequest = async (req, res) => {
    try{
      const rolesid =req.params.rolesid;
      
      const result = await employeeService.getEmployeeRoles(rolesid)
      res.status(200).send({success : true,data : result});
  }catch(error){
    switch(error){
      case 'rolesandEmployeedetails is required':
        res
        .status(400)
        .send({sucess:false,error:'rolesempdetails is required!'})
        break;
        default:
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
          break;
    }
  }
  };
  module.exports ={
    addEmployeeDetailsRequest,
    getEmployeeAndRolesRequest
  }