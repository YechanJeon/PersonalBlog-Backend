module.exports = async (dbModel) => {
    if(await dbModel.find().count() === 0) { 
        return 1
    }else{
        return (await dbModel.findOne().sort({_id : -1})).key+1
    }

    
}