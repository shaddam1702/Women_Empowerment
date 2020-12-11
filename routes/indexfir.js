var   express         = require("express");
var   router          = express.Router();
var   Fir      = require("../models/fir");
var   middleware     = require("../middleware");





router.get("/indexfir",function(req,res){
    
      Fir.find({},function(err,firs){
       
       if(err){
           console.log(err);
       } else {
         
           res.render("fir/index",{firs: firs});
       }
   });
});

router.get("/indexfir/new",function(req,res){
   
    res.render("fir/new"); 
});

router.post("/indexfir",function(req,res){
    console.log(req.body.fir)
     Fir.create(req.body.fir,function(err,newfir){
       
       if(err){
           res.render("fir/new");
       }else{
           res.redirect("/indexfir");
       }
   }) ;
});

router.get("/indexfir/:id",function(req,res){
    
       Fir.findById(req.params.id,function(err,foundfir){
        
        if(err){
            res.redirect("/indexfir");
        }else{
            res.render("fir/show" , { fir : foundfir});
        }
 });
    
    
});

router.get("/indexfir/:id/edit",function(req,res){
    
        Fir.findById(req.params.id,function(err,foundfir){
        
        if(err){
            res.redirect("/indexfir");
        }else{
            res.render("fir/edit" , { fir : foundfir});
        }
    });
    
    
});

//Update Route
/*router.put("/indexfir/:id",function(req,res){
    Fir.findByIdAndUpdate(req.params.id,req.body.fir,function(err,updatedFir){
        
        if(err){
            console.log(err);
        }else{
            
            res.redirect("/indexfir/"+req.params.id);
        }
    });
    
});*/

router.delete("/indexfir/:id",function(req,res){
    
    Fir.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/indexfir");
        }else{
            res.redirect("/indexfir");
        }
    })
})

module.exports = router;

