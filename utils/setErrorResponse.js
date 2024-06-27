const setErrorResponse=(err,res)=>{
    let status = 500
    let data = {
        isError:true,
        errors:[err.message]
    }
    if (err?.httpStatus){
      status = err.httpStatus
      data = err.data
    }
    return res.status(status).json(data)
}

module.exports = {setErrorResponse}