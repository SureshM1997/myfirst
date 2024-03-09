var app=require('express')();

app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.render("view.pug",template.pug);
    res.render("template.pug");
})

app.listen(8083,()=>{
    console.log("Node is Running!!!");
})