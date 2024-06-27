const User = require('../models/user.model');
const {ClientErrorResponse} = require("../utils/errors")

const userRegisterService = async(data) =>{
    const { name, email, password } = data;
    let globalData= {
        data:{isError:true,},
        
        httpStatus:400
    }

  const userExists = await User.findOne({ email });

  if (userExists) {
    globalData.data.errors=["User already exists"]
    return globalData
    // throw new ClientErrorResponse('User already exists',400);
  }

  const user = await User.create({ name, email, password });

  if (user) {
    return {
        data:{
      _id: user._id,
      name: user.name,
      email: user.email,
      accessToken: await user.generateToken()},httpStatus:201};
  } else {
    globalData.data.errors=["Invalid user data"]
    return globalData
    // throw new ClientErrorResponse('Invalid user data');
  }
}

const userLoginService = async(data) =>{
    const { email, password } = data;
    // console.log(data)

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
     return {
        data:{
      _id: user._id,
      name: user.name,
      email: user.email,
      token: await user.generateToken()},
        httpStatus:200
    };
  } else {
    return {
        data:{isError:true,errors:["Invalid Credential"]},
        
        httpStatus:400
    }

    
    // throw new ClientErrorResponse('Invalid Credentials',400);
  }
  
}


module.exports = {userRegisterService,userLoginService}