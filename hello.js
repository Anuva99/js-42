//JsAssignment_1
//Answer 1
let a = 2, b= 3;
a = a+b;
b = a-b;
a = a-b;
console.log("a:",a, "b:", b); // output- a: 3 b: 2


//Answer 2
//using if-else
let x = 10, y = 20,max;
if (x > y) {
    max = x;
} 
else {
    max = y;
}
console.log("Max value:", max); //output- Max value: 20

//using ternary operator
let p = 10, q = 20, max_2;
max_2 = x > y ? x : y;
console.log("Max value:", max_2); //output- Max value: 20


//Answer 3
let num = 22, IsEven;
IsEven = num%2 == 0 ? true : false;
console.log("Is num even? ", IsEven); //output- Is num even?  true