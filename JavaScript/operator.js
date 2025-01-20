//logical operators
var a=5
var b="5"
console.log(a==b)
console.log(a===b)

//bitwise operators

var c=10
var d="2"
console.log(c&d)
console.log(c|d)
console.log(c^d)
console.log(~c)
console.log(c>>2)
console.log(d<<2)

//ternary operator

a=11
console.log(a%2==0?"even":"odd")

//logical operators

a=5
console.log(a>0 && a<10)
console.log(a>=0 || a>10)
console.log(!a)

//spread operator
a=[1,2,3,4]
b=[5,6,7,]
c=[...b,...a]
console.log(c)

//rest operator
function restOperator(...args){
    console.log(args)
}
restOperator(10,20,30,40,50)
function restOperator(a,b,...args){
    console.log(a)
    console.log(b)
    console.log(args)
}
restOperator(10,20,30,40,50,...b)

//destructuring operator
var array=[10,20,30];
var [a,b]=array
console.log(a,b)

//Hoisting operator

console.log(a);a
var a=10

//function hoi
