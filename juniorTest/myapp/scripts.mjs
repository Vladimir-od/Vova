"use strict";

function fetchData() {

    let users = fetch("https://reqres.in/api/users");

    users.then(res => {
        if(!res.ok){
            throw Error("ERROR")
        }
        return res.json();
    })
        .then(response=>{
            console.log(response.data)
            const html = response.data.map(user=>{
                return `<div class="user"
                <p><img src="${user.avatar}"alt=""
                <p>${user.first_name}</p>
                <p>${user.email}</p>
                </div>`
            }).join('')
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html)
        }).catch(err=>{
            console.log(err);
        })

};
fetchData();