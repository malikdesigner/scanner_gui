import mysql from "mysql"
import express from"express";
import cors from"cors";
// const { format } = require('date-fns');

import {format} from "date-fns"

var app=express();


var mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"intel_tool"
});
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    // mysqlConnection.query('Select * from employees',(err,rows,fields)=>{
    //    res.json("HEllo this is the backend")
    // })

    res.json("HEllo this is the backend")
})

app.get('/users',(req,res)=>{
    const q='Select * from tbl_users';
    mysqlConnection.query(q,(err,rows)=>{
        if(err) return res.json(err)
       return res.json(rows)
    });

});
app.get('/users/:id',(req,res)=>{
    const q='Select * from tbl_users WHERE id=?';
    const employeeId=req.params.id;

    mysqlConnection.query(q,[...employeeId],(err,rows)=>{
        if(err) return res.json(err)
       return res.json(rows)
    });

});
app.post('/users',(req,res)=>{
    const currentDate = new Date();
const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate)
    const q='INSERT INTO tbl_users (`name`,`record_added`,`email`,`password`,`role`,`status`) VALUES (?)';
    console.log(q)
    const values=[
        req.body.name,
        formattedDate,
        req.body.email,
        req.body.password,
        req.body.role,
        req.body.status,

    ]
    console.log(values)
    mysqlConnection.query(q,[values],(err,rows)=>{
        if(err) return res.json(err)
       return res.json("Employees successfully added!!!")
    });

});

app.put("/users/:id",(req,res)=>{
    console.log("COMING")
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    console.log(formattedDate)
    const employeeId=req.params.id;

    const q="UPDATE tbl_users SET `name` = ?, `record_added`= ? ,`email`=?, `password`=?, `role`=? , `status`=?      WHERE id = ?";
    const values=[
        req.body.name,
        formattedDate,
        req.body.email,
        req.body.password,
        req.body.role,
        req.body.status,

    ]
    mysqlConnection.query(q,[...values,employeeId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Employee successfully updated")
    })
})

app.listen(8800,()=>console.log("Server is runnig at port 8800"))
