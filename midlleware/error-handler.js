const { CostumApiError } = require("../errors/costum-error")


const errorHandlerMiddlware=(err, req, res, next) => {
    if (err instanceof CostumApiError ) {
      console.log(err.statusCode);
      return res.status(err.statusCode).json({msg:err.message})
    }
      
    
    return res.status(500).json({msg:'Something went wrong, please try again'})
  }
module.exports = errorHandlerMiddlware