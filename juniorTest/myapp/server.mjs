"use strict";
import express from 'express';
let app = express();
import path from 'path';
import exphbs from 'express-handlebars';
import fetch from 'node-fetch';
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const __dirname = path.resolve();

app.get('/', function (req, res) {
    
    fetch("https://reqres.in/api/users")
    .then(res=>{
        return res.json()
    })
    .then(body=>{
    //   console.log(body.data[0].email)
      body.data.map((user)=>{
          console.log(user.email);
      })
    })
    res.render('index');
});
app.listen(3000, console.log(`server is listening on 3000`));