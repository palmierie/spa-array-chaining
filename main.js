console.log('main.js works');

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//sort integers in decending order
integers.sort((a,b)=>(b-a));
console.log('integers sorted', integers);

//remove integers larger than 19
var newArray = [];
for (let i = 0; i < integers.length; i++) {
  if (integers[i] < 20){
    newArray.push(integers[i]);
  }
}
console.log('integers under 19', newArray);

//multiply integers by 1.5 and then subtract 1
var newNewArray = []; //great name
for (let i = 0; i < newArray.length; i++) {
  newNewArray.push(((newArray[i]*1.5)-1));
}
console.log('integers multiplied by 1.5 then subtracted 1', newNewArray);

//add all numbers in array and display on DOM
document.getElementById("output").innerHTML = newNewArray.reduce((a,b)=>(a+b));
console.log('sum of integers', newNewArray.reduce((a,b)=>(a+b)));

