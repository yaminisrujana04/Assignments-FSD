// !without parameters and arguments
function demo()// functionn declareation
 {
     console.log("hello")
}
 demo()//function calling

//? with paramaters and arguments
 function demo1(a,b){
    console.log(a+b);
 }
 demo1(5,6);
 demo1(11,22);
 demo1(12,13);

function isPalindrome(str)
 {
     let revStr = " ";
    for(let i=str.length-1;i>=0;i--){
         revStr += str[i];
     }
     if(str==revStr){
        console.log("Palindrome");
     }else{
         console.log("Not a palindrome");
     }
 }
 isPalindrome("sir");
 isPalindrome("madam");

// function expression
let x=function(){
    console.log("function expression");
}
x();

//?IIFE
(
    function(){
    console.log("IIFE")
}
)();

// arrow function
 let b=()=>{console.log("Hello")}
 b();

let d=(a,b)=>console.log(a+b);
d(10,5);

let y=_ =>{console.log("Hiii");
           console.log("okkk");
           console.log("byee");

}
y();

function add(a,b){
    return(a+b);//explicit return
}
let z=add(4,4);
console.log(z);

let m=(a,b)=>a+b;
console.log(m())
