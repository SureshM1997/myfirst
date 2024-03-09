const app=require("express")();

const url=require("url");
 const port=8083;

 
 app.listen(
    port,
    ()=>console.log(`Server running on ${port}`)
 );
 
 app.get('/fruits',(req,res)=>{
    res.send("Mango and banana")
 });

 app.get("/",(req,res)=>{
   res.sendFile("/home/suresh143/Documents/MERN Stack/express1/index.html");
})

app.get("/form1",function (req, res) {  
   var q=url.parse(req.url,true).query;
   response = {  
          first_name:req.query.First_name , 
          last_name:req.query.Last_name
   }
      console.log(response);  
      res.end(JSON.stringify(response));  
   })  