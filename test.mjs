"use strict";
import cheerio from 'cheerio';
import express from 'express';
let app = express();
import path from 'path';
import req from 'request';
const __dirname = path.resolve();


app.use(function (request, response) {
   req('https://reqres.in/api/users?page=2',(err,res,body)=>{
    let $ = cheerio.load(body);
    let html = $.html()
        
   
   
      
//   let html =  $(body).map(user=>{
//         return `<div class="user"
//         <p><img src="${user.avatar}"alt=""
//         <p>${user.first_name}</p>
//         <p>${user.email}</p>
//         </div>`
//     }).join('');
//     console.log(html)
    
    // response.sendFile(__dirname + '/test.html')
    response.send(html)
   })
   
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