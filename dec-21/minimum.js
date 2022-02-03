var num1 = prompt("enter 1 number");
var num2 = prompt("enter 2 number");
var num3 = prompt("enter 3 number");

if(num1<num2 && num1< num3)
{
    alert(num1);
}
else if(num2<num1 && num2<num3)
{
    alert (num2);
}
else {
    alert(num3);
}