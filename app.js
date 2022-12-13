const express = require("express");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");




const app = express();



var items = ["Drink 3L of Water" , "Talk To a good Friend " , "Enjoy Some good Music"];

var workItems = [];


app.set('view engine', 'ejs');

// app.use(express.static(__dirname + 'public'));-> wrong way

app.use(bodyParser.urlencoded({extended:true}));

app.use("/public", express.static(__dirname + "/public"));

// app.use(express.static("public")); -> wrong way


app.get("/" , function(req , res){
    console.log("The user have visited");
    console.log(req);
    // res.send("Thank You for Visiting");

   let day = date.getDate();

//The mistake i had made
    // var currentDay = day.toLocaleString("en-US" , options);
   
    res.render('lists' ,{listTitle : day , newListItem : items} );
    
    // console.log(items.length);

});

app.get("/work" , function(req , res){
    res.render("lists" , {listTitle : "Work List" , newListItem : workItems});
    

});

app.get("/about" , function(req , res){
    res.render("about");
})

// app.post("/" , function(req  , res){
    
//     var newAdded = req.body.newItemUser;
//     items.push(newAdded);
   
//     // res.redirect("/");
    
// });

app.post("/" , function(req , res){

    var worklist = req.body.newItemUser;
    
    if(req.body.list==="Work List"){
        workItems.push(worklist);
        res.redirect("/work");
    }
    else{
        items.push(worklist);
        res.redirect("/");
    }
    
    
    
})

app.listen(3000 , function(){
    console.log("Port 3000 is running ");
})