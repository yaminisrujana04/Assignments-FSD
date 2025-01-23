// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// }, 5000)
// console.log(40);
// console.log(50);
// setInterval(()=>{
//     document.writeln("MRU")
// },1500)

//! Promise

// let p1=new Promise((resolve,reject)=>{});
// console.log(p1);

// let p2=new Promise((resolve,reject)=>{
// resolve("Success");
// });
// console.log(p2);
// p2.then((Response)=>
//     {
//     console.log(Response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("Finally printing for both"));




// let p3=new Promise((resolve,reject)=>{
//     reject("Failure")
// });
// console.log(p3);
// p3.then((Response)=>{
//     console.log(Response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("Finally printing for both"));

//?API fetching

// function fetchUsers()
// {
//     let x=fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(x);
//     x.then((Response)=>{
//         return Response.json().then(data=>{
//             console.log(data);
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers()

// function fetchUsers(){
//     // let res = window.fetch("https://api.github.com/users");
//     let res = window.fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(res);
//     res.then((response)=>{
//         // console.log(response);
//         // console.log(response.json());
//         response.json().then(data=>{
//             console.log(data);
//             let store=document.getElementById("store");
//             // console.log(store);
//             data.map((user)=>{
//                 // console.log(user);
//                 store.innerHTML += `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>
//                 </tr>
//                 ` 
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers()

// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise successfull completing");
//     },3000)
// })
// async function demo()
// {
//     console.log("Start");
//     let x= await p;
//     console.log(x);
//     console.log("End");
// }
// demo();

async function fetchUsers(){
    let response=await fetch("https://api.github.com/users");
    let data=await response.json();
    console.log(data);
    
}
fetchUsers();