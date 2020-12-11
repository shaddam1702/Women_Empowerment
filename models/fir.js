var mongoose  =  require("mongoose");
var firSchema = new mongoose.Schema({

    title : String,
    image : String,
    body  : String,
    created : {type : Date , default : Date.now}
 
});
module.exports = mongoose.model("Fir",firSchema);
