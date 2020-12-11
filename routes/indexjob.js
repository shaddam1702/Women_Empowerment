var   express         = require("express");
var   router          = express.Router();
var   Job     = require("../models/job");
//var   middleware     = require("../middleware");





router.get("/indexjob",function(req,res){
    
    Job.find({},function(err,jobs){
       
       if(err){
           console.log(err);
       } else {
         
           res.render("job/index",{jobs: jobs});
       }
   });
});

router.get("/indexjob/new",function(req,res){
   
    res.render("job/new"); 
});

router.post("/indexjob",function(req,res){
    console.log(req.body.job)
    Job.create(req.body.job,function(err,newjob){
       
       if(err){
           res.render("job/new");
       }else{
           res.redirect("/indexjob");
       }
   }) ;
});

router.get("/indexjob/:id",function(req,res){
    
    Job.findById(req.params.id,function(err,foundjob){
        
        if(err){
            res.redirect("/indexjob");
        }else{
            res.render("job/show" , { job : foundjob});
        }
 });
    
    
});

// router.get("/indexlaw/:id/edit",function(req,res){
    
//     Law.findById(req.params.id,function(err,foundlaw){
        
//         if(err){
//             res.redirect("/indexlaw");
//         }else{
//             res.render("law/edit" , { law : foundlaw});
//         }
//     });
    
    
// });

// //Update Route
// router.put("/indexlaw/:id",function(req,res){
//     Law.findByIdAndUpdate(req.params.id,req.body.law,function(err,updatedLaw){
        
//         if(err){
//             console.log(err);
//         }else{
            
//             res.redirect("/indexlaw/"+req.params.id);
//         }
//     });
    
// });

// router.delete("/indexlaw/:id",function(req,res){
    
//     Law.findByIdAndRemove(req.params.id,function(err){
//         if(err){
//             res.redirect("/indexlaw");
//         }else{
//             res.redirect("/indexlaw");
//         }
//     })
// })

module.exports = router;

