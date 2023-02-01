const express = require('express')
const app = express()
const usersRouter=require('./users/users.router')
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        message:'Server is ok! '
    })
})

app.use('/',usersRouter )

app.listen(9000, ()=>{
    console.log('Everything ok')
})
module.exports = app
