const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=new express();
const port=process.env.PORT||5000;

require("./db/connection");

// const static_path=path.join(path.join(__dirname,"../public"));
const templates_path=path.join(path.join(__dirname,"../templates/views"));
const partials_path=path.join(path.join(__dirname,"../templates/partials"));

// app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
})
app.listen(port,()=>{
    console.log(`listening to ${port}`);
})