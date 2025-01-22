let userDetails={
    name:"Srujana",
    age:24,
    place:"Hyderabad"
}
console.log(userDetails);
console.log(userDetails.name)
console.log(typeof(userDetails));

let x=JSON.stringify(userDetails);
console.log(x);
console.log(x.name);
console.log(typeof(x));

let y=JSON.parse(x);
console.log(y);