"use strict";
import express from 'express';
let app = express();
import path from 'path';
const __dirname = path.resolve();


app.use(function (request, response) {
   
    response.sendFile(__dirname + '/test.html')
})
app.listen(3000, console.log(`server is listening on 3000`));










// import request from 'request';
// let data = document.getElementById("#app");
// app.get("/", (req, response) => {

//     request('https://reqres.in/api/users?page=2', (error, res, body) => {
//         if (!error && res.statusCode == 200) {

//         //    data.innerHTML = body;
//             response.sendFile(__dirname + "/test.html")
//         }
//     })
// })
// app.listen(3000, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on 3000`)
// });