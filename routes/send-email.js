const express = require('express');
const router = express.Router();

/*const express = require('express');
const nodemailer = require('nodemailer');

var app =express();*/

router.get("/",function(req,res)
{   
       res.sendfile("./public/map.html");
       // sendemail();
        
});
router.post('/', (req, res) => {
 console.log(req.body.longitude);
  console.log(req.body.latitude);
  // console.log(req.body.senderemail);
  // console.log(req.body.recieveremail);
  res.json({ ok: true });
 sendemail(req.body.longitude,req.body.latitude);
})
////////////////////////////////////////////
function sendemail(longitude ,latitude){
//console.log("calling function");
//myfunction();
  var nodemailer = require('nodemailer');    
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '*****************',
    pass: '************'
  }
});

var mailOptions = {
  from: 'abc@gmail.com',
  to: 'xyz@gmail.com',
  subject: 'Live location send by your friend whose need your help',
  text: ` https://www.google.com/maps/@${longitude},${latitude},15z`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

  module.exports = router; 
