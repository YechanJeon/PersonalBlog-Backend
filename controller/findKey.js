const mongoose = require('mongoose')

module.exports = async (modelName) => {
    if(await modelName.count() === 0){
        return 1
    }else{
        return ModelName.findOne().sort({ dateCreated: -1 }).key+1
    }
}