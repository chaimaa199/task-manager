class  CostumApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
        
    }
}
const createCostumError=(msg,code)=>{
  return new CostumApiError(msg,code)
}
module.exports={ createCostumError, CostumApiError}