const express=require("express")
const app=express()
 app.get("/",(req,res)=>
 {
    res.send("<h1>welcome to encommerse website</h1>")}
 )
  
 app.get("/products/:id",(req,res)=>})
 app.get("/search",(req,res)=>
{
    let prodname=req.query.name
    res.send(`<h1>Details for searched ptoduct with name ${prodname}</h1>`)
})

    app.listen(4500,()=>console.log("Express server is running on 4500"))
