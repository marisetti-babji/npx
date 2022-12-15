const db=require('../config/connection')

//Employee Controllers
//1.addEmployeedetails
const addEmployeeDetails = async ( Fname, Lname, Email, rolesid) => {
  try{
  if(!Fname || !Lname || !Email || !rolesid){
    throw 'employee details is required'
  }
  let addData = {
    Fname: Fname,
    Lname: Lname,
    Email: Email,
    rolesid: rolesid
  };
  const employees = await db.employees.create(addData);
  return employees;
}catch(error){
  throw error
}
};

//2.get employeeRoles(both)
const getEmployeeRoles = async (rolesid) => {
   
  try{
    if(! rolesid){
      throw "rolesandEmployeedetails is required"
      }
  let data = await db.employees.findAll({
    include: [
      {
        model: db.roles,
      },
    ],
    where: { rolesid: rolesid },
  });

 return data;
}catch(error){
  throw error
    }
  }
module.exports ={
  addEmployeeDetails,
  getEmployeeRoles
}