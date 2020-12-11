var mongoose  =  require("mongoose");
var jobSchema = new mongoose.Schema({

    title : String,
   
    body  : String,
    created : {type : Date , default : Date.now}
 
});
module.exports = mongoose.model("Job",jobSchema);