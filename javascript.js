//   //1. ways to print in javaScript
//   console.log("Hello world");
//   alert("Are you sure");
//   document.write("You can write anything.");

// //2. javascript console api
// console.log("Hello world");
// console.warn("This is warning");
// console.alert("This is an alert");
// 3. variables in javascript
var number1 = 34;
var number2 = 34;
console.log(number1 + number2);
//------------------------------------------------------------------------------------------------------------
//4. types of data types in javascript

//1. string
var str = "This is the string datatype in javascript";
var str2 = "Another simple example of string datatype in javascript"
console.log(str);
console.log(str2);

// 2. number
var num1 = 343;
var num2 = 875;
console.log(num1);
console.log(num2);

// 3. objects
var marks = {
    ranjit: 342,
    asif: 342,
    harry: 99.99
}
console.log(marks);

// 4. booleans

var a = true;
var b = false;
console.log(a);

// 5. undefineds
 var und;
 console.log(und);

 var n=null;
 console.log(n);

 // at a very high level there are two types of data types in javascript

 /* 
 primitive datatypes: undefined, null, string, boolean, symbol, number.
 reference datatypes: Arrays and objects
 
 */

 var arr = [1,23,423,232, "ranjit", 'a'];
 console.log(arr);
//-------------------------------------------------------------------------------------------------------
 // operators in javascript

 //1 arithmatic operators 
var a = 33;
var b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// 2 assignment operators
var c = b;
c+= 2; // c= c+2
c-= 2; // c= c-2
c*= 2; // c= c*2
c/= 2;
console.log(c);

// 3. comparison operators
var x = 34;
var y = 23;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);

// 4. logical operators. 
// logical AND operator
console.log(false && false);
console.log(true && false);
console.log(true && true);
console.log(false && true);
// logical OR operator
console.log(false || false);
console.log(true || false);
console.log(true || true);
console.log(false || true);
// logical NOT operator
console.log(!true);
console.log(!false);
//---------------------------------------------------------------------------------------------------------
// functions in javascript

function avg(a,b){
c = (a+b)/2;
return c;

}
c1 = avg(34, 343);
c2 = avg(3423, 234);
console.log(c1, c2);


//----------------------conditionals in javascript------------------------

var age = 8;
if (age >=18){
    console.log("You are to old");
}
else{
    console.log("you are to small boy");
}

// if else ladder 
var input = 234;
if(input > 234){
    console.log("your entered number is to big");
}
else if(input<234){
console.log("your entered number is to big");
}
else if (input ==234){
    console.log("You entered correct number");
}
else{
    console.log("Something went wrong...")
}

//-----------------------loops in javascript---------------------
// for loop
var arr = [2,3,4,5,6,3,6,7,2];
console.log(arr);
for(var i =0; i<arr.length;i++){
    console.log(arr[i]);

}

// for each loop
arr.forEach(function(element){
    console.log(element);


})

// while loop
 let j =0;
 while( j<arr.length){
     console.log(arr[j]);
     j++;
 }

 do{
     console.log(arr[j]);
     j++;
 }  while(j<arr.length);

 // ---------------------------------------------- Arrays in javascript -----------------------------------------

 var myArray = ["camera", "apple", 343, 342, 213423, 23423];
 console.log(myArray.length);
 myArray.push("apple");
 myArray.shift();
 console.log(myArray);

 // -------------------------------------------dates in Javascript-------------------------------\
 let myDate = new Date();
 console.log(myDate);
 console.log(myDate.getDay());
 console.log(myDate.getTime());
 console.log(myDate.getFullYear);

 //-------------------------events in javascript------------
//1.
 function clicked(){
     console.log("The button was clicked...");
     //document.write("The button was clicked...");
    // console.warn("You are successfully submited this form ");
  //  alert("You clicked the universal button");

 }

 //2
 window.onload=function(){
console.log("The document is loaded successfully")
 }
 logkaro = ()=>{
     console.log("I am your log");
    //  alert("this is last warning you have only 10 sec");
 }
 pikacho=()=>{
    //  alert("This alert will show you after every 3 seconds")
    console.log("i am your pikacho ")
 }

 //SetTimeOut and setInterval
 setTimeout(logkaro, 2000)

 setInterval(pikacho, 10000)
 //------------------------------------------local storage-----------------
 localStorage.setItem('name', 'Ranjit');
 localStorage
 localStorage.getItem('name');

 // ----------------------------------- JSON -----------------------

 obj = {name:"Ranjit", length:1}
 jso = JSON.stringify(obj);
 console.log(jso)
 console.log(typeof jso)




