const express=require("express")
const app=express()
//url/route chaining
app.route("/products")
.get((req,res)=>
{
    res.send("<h1>The following are all product details</h1>")
})
.post((req,res)=>
    {
        res.send("<h1>The product is saved successfully</h1>")
    })
.put((req,res)=>
    {
        res.send("<h1>The product is updated successfully</h1>")
    })
.delete((req,res)=>
    {
        res.send("<h1>The product is deleted successfully</h1>")
    })

app.listen(3800,()=>console.log("api server running on PORT 3800"))
