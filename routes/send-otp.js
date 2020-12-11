const express = require('express');
const router = express.Router();
//const Otp = require('../models/otp');
const mongoose = require('mongoose');
var y;
const OtpSchema = new mongoose.Schema({
  otp: {
    type: String
  }
});
const Otp= mongoose.model("Otp",OtpSchema);
function OTPSAVE(value){
  Otp.deleteMany({},function(err)
  {
    if(err)
    console.log(err);
  });
var otp=new Otp({

      otp:value
      });
      y=value;
        otp.save(function(error) {
          // console.log("otp saved");
          if(error) {
            console.error(error);
          }
        });
      }
////for finding random string for otp
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
router.get("/",function(req,res){
      
      var value=makeid(5);
      sendemail(value);
      OTPSAVE(value);
      res.sendfile('./public/OTP.html');
      
});
router.post('/', async(req, res) => {
//var recievedotp=req.body.OTP;

//     var verify=Otp.findOne({ otp: req.body.OTP });
//  //console.log(verify);
//   if (verify) {
//      console.log("OTP Verified.");
//     //  db.inventory.deleteMany(
//     // { "otp" : "req.body.OTP" })
//     //      res.send("sucessfull");
//     
   
//   }else {
//     
// Otp.find(req.body.OTP,function(err)
// {
  // if(err)
  // {
  //   console.log(err);
  // }
  // else
  // {
     if(y===(req.body.OTP.otp))
     {
          res.render('../views/health/new.ejs');
     }
else
{
res.render('../views/law/new.ejs');

}
 // }
// })
});
////////////////////////////////////////////
function sendemail(value){
  console.log("send mail");
  var nodemailer = require('nodemailer'); 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '***************',
    pass: '*******'
  }
});

var mailOptions = {
  from: 'ppgmail.com',
  to: 'aa@gmail.com',
  subject: 'Verify your email',
  //text: `longitude:${longitude}&latitude:${longitude}`
  text:`your otp is : ${value}`
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