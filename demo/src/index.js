const express=require("express");
const app=express();

const path=require('path')
// console.log(path.join(__dirname,"../public"));
const staticPath=path.join(__dirname,"../public"); //built in middleware 


app.set("view engine", "hbs"); //to set view engine

app.get('/',(req,res)=>{
    res.render('index',{
        name:"vaishnav" //dynamically added content from index.hbs
    });
})
// app.use(express.static(staticPath));

const morgan=require('morgan');
const helmet=require('helmet');

app.use(morgan());
app.use(helmet());

app.get('/',(req,res)=>{
    res.send("server running on port 5000");
})

app.listen(5000,()=>{
    console.log("listening port at 5000")
})