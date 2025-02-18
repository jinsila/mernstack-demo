const express=require("express")
const app=express()
 app.get("/",(req,res)=>
 {
    res.send("<h1>hello from Express</h1>")
 })
 app.get("/about",(req,res)=>
    {
       res.send("<h1>hello from about</h1>")
    })
    app.use(req,res)=>
        {
           res.send("<h1>hello from about</h1>")
        })



    app.listen(4500,()=>console.log("Express server is running on 4500"))

 