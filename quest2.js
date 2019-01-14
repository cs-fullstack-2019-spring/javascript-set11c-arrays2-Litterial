/*Create an array with 5 numbers. Ask the user for the length of the array you want to print.
Alert the user of the array from 0 to their input.*/

var num = [10,32,63,74,5];
var i=0;
var ask= parseInt(prompt("Please enter the length of your array you want to print")); // asks for length

do
{
    alert(num[i]);       // counts up elements of array
    i++;
}
while(i<ask);     // does this until it reaches their input

