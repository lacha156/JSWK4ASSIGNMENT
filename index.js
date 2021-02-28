// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’

function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}

// 2.	Write the same function as above as an arrow function with a different name.
let fullName2= (firstName, lastName) => `${firstName} ${lastName}`;
// 3a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
setTimeout(()=>{alert('Time is up!');},);
// 3b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.
setInterval (askAreWeThereYet =>{alert('Are we there yet?');},100000);
//4.	In this step you are going to write a function that takes a callback to better understand how callbacks work
// a.  Write a new function named processSplicedValue that takes 3 parameters- an array, the index of the element to be spliced from the arrayand a ca callback function that will process the sliced element. 
function processSplicedValue(array,index,callback){
let splicedValue = array[index];
array.splice(index,1);
callback(splicedValue);
}
// Creat an array of strings, call processsSplicedValue, and passs in the array you just created, an index number, and console.log into it. 
random=['Jaina','Hello','What', 'Chicken'];
processSplicedValue(random,3,console.log);
// B. Call the processSplicedValue function again but htis time pass in the alert method instead of console.log
processSplicedValue(random,3,alert);
// C. Call the prcocessSplicedValue function again, but this time pass in anonymous arrow function that alerts the spliced value
processSplicedValue(random,3,(value)=>{alert(value)});
// D. Call the processSplicedValue function one more time, but this time pass in a custom function of your choice that you should create and name. 
function lengthOfSplicedValue(value){
    console.log(value.length)
}
processSplicedValue(random,3,value);

// cant seem to figure this one out. 