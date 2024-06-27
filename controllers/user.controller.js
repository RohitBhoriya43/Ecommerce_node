const {userRegisterService,userLoginService} = require("../services/user.service")
const {setErrorResponse} = require("../utils/setErrorResponse")

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

const registerUser = async (req, res) => {
  try{
    const {data,httpStatus} = await userRegisterService(req.body)
    return res.status(httpStatus).json(data)
  }catch(err){
    return setErrorResponse(err,res)
  }
  
};

const authUser = async (req, res) => {
  try{
    const {data,httpStatus} = await userLoginService(req.body)

    return res.status(httpStatus).json(data)
    // return res.status(201).json(userLoginService(req.body))
  }catch(err){
    console.log("user login error",err)
    return setErrorResponse(err,res)
  }
};

module.exports = { registerUser, authUser };
