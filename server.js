const express=require('express')
const app=express()
const port=5000

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/users'))

// let users=[]

// app.get('/',(req,res)=>{
//     res.send(users)
// })
// // console.log(req.body);

// app.post('/',(req,res)=>{
//     const user=req.body
//     users.push(user)
//     res.send(`User with the name ${user.name} added to the database!`)

// })
// console.log(users);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
// console.log(users);