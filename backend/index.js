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
// app.get('/getCategories', (req, res) => {
//     res.json(categoryOptions);
// });

// app.get('/getSubcategories/:category', (req, res) => {
//     const selectedCategory = req.params.category;
//     const subcategoryOptions = jsonData[selectedCategory] || [];
//     res.json(subcategoryOptions);
// });
// Assuming you have a MySQL connection named 'mysqlConnection'
app.get('/getCategories', (req, res) => {
    const query = 'SELECT id, name FROM tbl_propertytype';
    
    mysqlConnection.query(query, (err, rows) => {
      if (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const categoryOptions = rows.map((category) => ({
          label: category.name,
          value: category.id,
        }));
        res.json(categoryOptions);
      }
    });
  });
  
  app.get('/getSubcategories/:category', (req, res) => {
    const selectedCategoryId = req.params.category;
    const query = 'SELECT id,name FROM tbl_propertycategory WHERE category = ?';
    
    mysqlConnection.query(query, [selectedCategoryId], (err, rows) => {
        // console.log(rows)
      if (err) {
        console.error('Error fetching subcategories:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const subcategoryOptions = rows.map((subcategory) => ({
          label: subcategory.name,
          value: subcategory.id,
        }));
        res.json(subcategoryOptions);
      }
    });
  });
  
app.get('/transactions/:type/:city', (req, res) => {
     console.log(req.params)
     if(req.params.city!=undefined && req.params.type !=undefined && req.params.type!="" && req.params.city!="" ){

         const q = 'SELECT a.*, b.name AS propertyTypeCategory, c.city_name, d.name as propertyType FROM tbltransactions AS a JOIN tbl_propertycategory AS b ON a.type = b.id JOIN tbl_cities AS c ON a.city = c.id JOIN tbl_propertytype AS d ON b.category = d.id where a.type=? && a.city=?;';
         mysqlConnection.query(q,[req.params.type, req.params.city], (err, rows) => {
             if (err) {
                 console.log(err)
                 return res.json(err)
             }
             else{
                 return res.json(rows)
             }
         });
     }
    //  else {
    //     const q = 'SELECT a.*, b.name AS propertyTypeCategory, c.city_name, d.name as propertyType FROM tbltransactions AS a JOIN tbl_propertycategory AS b ON a.type = b.id JOIN tbl_cities AS c ON a.city = c.id JOIN tbl_propertytype AS d ON b.category = d.id where a.type=10 && a.city=10;';
    //     mysqlConnection.query(q,[req.params.type, req.params.city], (err, rows) => {
    //         if (err) {
    //             console.log(err)
    //             return res.json(err)
    //         }
    //         else{
    //             console.log(res.json(rows))
    //             return res.json(rows)
    //         }
    //     });
    //  }

});

app.listen(8800, () => console.log("Server is runnig at port 8800"))
