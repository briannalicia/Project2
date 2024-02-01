const express=require("express")
const app=express()
const port=5000
app.get("/", (req, res) => {
    res.send("tester")
})

app.listen(port, () => {
    console.log("serverStart")
})