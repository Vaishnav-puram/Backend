const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/registration")
    .then(()=>console.log("connection established...."))
    .catch((err)=>{console.log("not connected...")});

