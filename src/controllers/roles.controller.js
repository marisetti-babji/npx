const rolesServices = require("../services/roles.services");
const httpStatus = require("http-status");
//1.add roles
const addrolesRequest = async (req, res) => {
  try {
    const title = req.body.title;

    const result = await rolesServices.addrolesDetails(title);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    switch (error) {
      case "roles details is required":
        res
          .status(400)
          .send({ sucess: false, error: "roles details is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        break;
    }
  }
};

//2.update roles
const updateRolesRequest = async (req, res) => {
  try {
      const rolesid =req.params.id;
    
      const postJSON = req.body;
   
    const result = await rolesServices.updateRoles(rolesid, postJSON );
    
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error)
    switch (error) {
      case "rolesid update is required":
        res
          .status(400)
          .send({ sucess: false, error: "rolesid update is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        break;
    }
  }
};

//3.get all roles

const getAllrolesrequest = async (req, res) => {
  try {
    
    const result = await rolesServices.getAllroles();
    console.log('result',result);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    switch (error) {
      case "roles data is required":
        res
          .status(400)
          .send({ sucess: false, error: "roles data is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        break;
    }
  }
};

module.exports = {
  addrolesRequest,
  updateRolesRequest,
  getAllrolesrequest,
};
