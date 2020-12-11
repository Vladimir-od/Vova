"use strict";
import express from 'express';
let app = express();
import req from 'request';
app.set("view engine", "hbs");
app.use(function (request, response) {
    req('https://reqres.in/api/users?page=2', (err, res, body) => {
        let contacts = JSON.parse(body);
        const html = contacts.data.map(user => {
           return `<div class="user">
        <p><img src="${user.avatar}"alt=""</p>
        <p>${user.first_name}</p>
        <p>${user.email}</p>
        </div>`
        }).join('');
        response.send(html)
    })
})
app.listen(3000, console.log(`server is listening on 3000`));








