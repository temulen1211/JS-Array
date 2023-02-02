//1.
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayOfNumbers);

//2.
let summary = 0;

for(i = 0; i < arrayOfNumbers.length; i++){
    summary += arrayOfNumbers[i];
}
console.log(summary);

//3.
 let highest = Math.max(...arrayOfNumbers);
 console.log(highest);

 //4.
 let lowest = Math.min(...arrayOfNumbers);
 console.log(lowest);

 //5. 
 arrayOfNumbers.unshift(33);
 console.log(arrayOfNumbers); 

 //6.
arrayOfNumbers.push(15);
console.log(arrayOfNumbers);



