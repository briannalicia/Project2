const express=require("express")
const app=express()
require("dotenv").config()
const mongoConfig=require("./config")
mongoConfig()
const port=5000
app.get("/", (req, res) => {
    res.send("tester")
})

app.listen(port, () => {
    console.log("serverStart")
})