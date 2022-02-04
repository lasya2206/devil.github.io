function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 
console.log(sum(2, 3));         
console.log(sum(-10, 1));       
console.log(sum(1, 1, 1, 1));  
console.log(sum());   

function add(x, y) {
    return x+y;
}
function add(x, y, z) {
    return x+y+z;
}
 
console.log(add(2, 3));      
console.log(add(-1, 1));   
 
console.log(add(1, 1, 1));   