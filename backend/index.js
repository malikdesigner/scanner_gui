import mysql from "mysql"
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import fs from "fs";
// const { format } = require('date-fns');

import { format } from "date-fns"

var app = express();


var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "intel_tool"
});
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}))
// app.use(cors({
//   origin: 'https://true-pleasantly-warthog.ngrok-free.app',
//   credentials: true,
// }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.get('/', (req, res) => {
    if (req.session.username) {
        return res.json({ valid: true, username: req.session.username })
    } else {
        return res.json({ valid: false })
    }
})

app.get('/users', (req, res) => {
    const q = 'Select * from tbl_users';
    mysqlConnection.query(q, (err, rows) => {
        if (err) return res.json(err)
        return res.json(rows)
    });

});
app.get('/users/:id', (req, res) => {
    const q = 'Select * from tbl_users WHERE id=?';
    const employeeId = req.params.id;

    mysqlConnection.query(q, [...employeeId], (err, rows) => {
        if (err) return res.json(err)
        return res.json(rows)
    });

});
app.post('/users', (req, res) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    console.log(formattedDate)
    const q = 'INSERT INTO tbl_users (`name`,`record_added`,`email`,`password`,`role`,`status`) VALUES (?)';
    console.log(q)
    const values = [
        req.body.name,
        formattedDate,
        req.body.email,
        req.body.password,
        req.body.role,
        req.body.status,

    ]
    console.log(values)
    mysqlConnection.query(q, [values], (err, rows) => {
        if (err) return res.json(err)
        return res.json("Employees successfully added!!!")
    });

});

app.put("/users/:id", (req, res) => {
    console.log("COMING")
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    console.log(formattedDate)
    const employeeId = req.params.id;

    const q = "UPDATE tbl_users SET `name` = ?, `record_added`= ? ,`email`=?, `password`=?, `role`=? , `status`=?      WHERE id = ?";
    const values = [
        req.body.name,
        formattedDate,
        req.body.email,
        req.body.password,
        req.body.role,
        req.body.status,

    ]
    mysqlConnection.query(q, [...values, employeeId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Employee successfully updated")
    })
})
app.post("/login", (req, res) => {
    const q = "SELECT * from tbl_users WHERE `email`=? AND `password`=?";
    mysqlConnection.query(q, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Message: "Error in server" });
        if (result.length > 0) {
            req.session.username = result[0].name
            console.log(req.session.username)
            return res.json({ login: true, username: req.session.username })
        }
        else {
            return res.json({ login: false })
        }
    })

})
app.get('/province', (req, res) => {
    const q = 'Select * from tbl_states';
    mysqlConnection.query(q, (err, rows) => {
        if (err) return res.json(err)
        return res.json(rows)
    });

});
app.get('/cities/:provinceId', (req, res) => {
    const provinceId = req.params.provinceId;
    const q = 'SELECT * FROM tbl_cities WHERE province = ?';

    mysqlConnection.query(q, [provinceId], (err, rows) => {
        if (err) {
            return res.json(err);
        }
        return res.json(rows);
    });
});

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('categories.json', 'utf-8'));
// Convert the JSON data into the format suitable for Select component
const categoryOptions = Object.keys(jsonData).map((category) => ({
    label: category,
    value: category,
}));
app.get('/getCategories', (req, res) => {
    res.json(categoryOptions);
});

app.get('/getSubcategories/:category', (req, res) => {
    const selectedCategory = req.params.category;
    const subcategoryOptions = jsonData[selectedCategory] || [];
    res.json(subcategoryOptions);
});

app.listen(8800, () => console.log("Server is runnig at port 8800"))
