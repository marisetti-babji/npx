const db = require('../config/connection')
//get roles
const addrolesDetails = async (title) => {
  try {
    if(!title){
      throw 'roles details is required'
    }
    let addData = {
      title: title,
    };
    const role = await db.roles.create(addData);
     return role
  } catch (error) {
    throw error
  }
};
// 2.update roles
const updateRoles = async (rolesid) => {
  if(!rolesid){
    throw "rolesid update is required"
  }
  try {
  let rolesid = rolesid;

  let role = await db.roles.update(req.body, { where: { rolesid: rolesid } });
    return role
}catch (error){
  throw error
  }
}

//3.get all roles
const getAllroles = async (req, res) => {
  try{
  let role = await db.roles.findAll({});
  if(!role){
    throw "roles data is required"
  }
  return role;
  }catch(error){
   throw error
   }
  }
module.exports = {
  addrolesDetails,
  getAllroles,
  updateRoles,
};
