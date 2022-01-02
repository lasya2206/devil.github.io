a=[];

 

var int1 = parseInt(prompt("Enter 1st number"));
a.push(int1) // Push int1 into the array
var int2 = parseInt(prompt("Enter 2nd number"));
a.push(int2) // Push int2 into the array
var int3 = parseInt(prompt("Enter 3rd number"));
a.push(int3) // Push int3 into the array
let max;

 

// check the condition
if(a[0] >= a[1] && a[0] >= a[2]) {
    max = a[0];
}
else if (a[1] >= a[0] && a[1] >= a[2]) {
    max = a[1];
}
else {
    max = a[2];
}

 

// display the result
alert( max);
