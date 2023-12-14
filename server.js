const express = require('express')
const app = express()

//routes
app.get("/", (req,res) =>{
    res.send('Hello NODE API')
})

app.listen(5000, ()=> {
    console.log(`Node API running on 5000`)
})