const express = require('express');
const web = express();
const path = require('path');
const hbs = require('hbs');

// const static_path =  path.join(__dirname,"../views");
const staticPath = (path.join(__dirname,"../views"));
web.set('view engine', 'hbs');


web.use(express.static(staticPath)); 

web.get("",(req,res)=>{  
    res.render("index");
})
web.get("/about",(req,res)=>{
    res.render("about")
})
web.get("/weather",(req,res)=>{
    res.render("weather")
})
web.get("*",(req,res)=>{
    res.render("404error")
})
web.listen(5500,()=>{
    console.log("listning to port number 5500")
}); 