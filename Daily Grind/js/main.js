// //In this Kata we are passing a number (n) into a function.
// //Your code will determine if the number passed is even (or not).
// //The function needs to return either a true or false.
// //Numbers may be positive or negative, integers or floats.
// //Floats with decimal part non equal to zero are considered UNeven for this kata
// // function testEven(n) {
// //     return n % 2 === 0; 
// //   }


// // //******************************************************** */
// // // There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// // // number of pillars (≥ 1);
// // // distance between pillars (10 - 30 meters);
// // // width of the pillar (10 - 50 centimeters).
// // // Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
// // function pillars(num_pill, dist, width) {
// //     // // this checks how manu pillers are there if true goes and takes accounts the gaps between pillars * conversion to CM + the width of the number of pillars that exist in the middle
// //     return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// //   }

// //   //******************************************************** */
// //   // create a function that takes in a list and returns a list with the reverse order.
// //   function reverseList(list) {
// //     return list.slice().reverse();
// //   }

// //   //******************************************************** */
// // //Given an array of integers your solution should find the smallest integer./

// // class SmallestIntegerFinder {
// //   findSmallestInt(args) {
// //     return args.sort((a,b) => a -b)[0]; 
// //   }
// // }

// // //*******************
// // // Trolls are attacking your comment section!
// // // A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// // // Your task is to write a function that takes a string and return a new string with all vowels removed.
// // // For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// // // Note: for this kata y isn't considered a vowel.
// // function disemvowel(str) {
// //   return str.replace(/[aeiou]/gi, '')
// // }

// // //*********** */
// // function stringToArray(string) {
// //   // Split the string into an array of characters
// //   var characters = string.split('');

// //   // Join the characters into a string with spaces between them
// //   var stringWithSpaces = characters.join(' ');

// //   // Split the string with spaces into an array of words
// //   var words = stringWithSpaces.split(' ');

// //   return words
// // }
// // /////////////////////////////////////////////////////////////////
// // // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// // function sumTwoSmallestNumbers(num){
// //   //sort the array
// //   let sortedNum = num.sort((a,b) => a - b);
  
// //   //sum of the first two elements

// //   let sum = sortedNum[0] + sortedNum[1];

// //   return sum;
// // }

// // // In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// // // At the end of the first year there will be: 
// // // 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// // // At the end of the 2nd year there will be: 
// // // 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// // // At the end of the 3rd year there will be:
// // // 1141 + 1141 * 0.02 + 50 => 1213
// // // It will need 3 entire years.
// // // More generally given parameters:
// // // p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// // // the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// // // aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// // // Examples:
// // // nb_year(1500, 5, 100, 5000) -> 15
// // // nb_year(1500000, 2.5, 10000, 2000000) -> 10

// // // function nb_year(p0, percent, aug, p) {
// // //   for ( let years = 0; p0 < p; years++){
// // //     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
// // //   }
// // //   return years
// // // }
// // // /////
// // // // Write a function that always returns a 5; Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// // // function oddFive (){
// // //   return 'jeeez'.length;
// // // }
// // // // PREP
// // //  //take in a number, if the number is didvible by 3 print fizz if it's discvible by 5 buzz, but if 3 and 5 fizzbuzz
// // // // P: will always be a whole postive number
// // // //returning 
// // //  function fizzBuzz(num){
// // //   //loop
// // //   //conditionals %3&%5 , % 3, and %5  
// // //   //console.log the number or fizz, buzz, fizzBuz
  
// // //  }
// // // fizzBuzz (5);//1,2,fizz,4,buzz
// // // fizzBuzz(3);//1,2,fizz,
// // // fizzBuzz(15);;//1,2,fizz,4,buzz, fizz,7,8,fizz,11,fizz,13,14,fizzbuzz
// // //  //

// // //  function loadScript(src) {
// // //   //creates a <script> tag and append it to the page 
// //   //thos causes the scrip with given src to start loading and run when compplete
// //   let scrip p document.createElement('script');
// //   script.src = src;
// //   document.head.append(script);
// //  }

// // //  let promise = new Promise (function(resolve,reject){
// // //   //executor (the producing code, 'singer')
// // //  })


// // //  let promise = new Promise(function (resolve,reject) {
// // //   //the funcaiton is executed automatically when the promise is constructed

// // //   // after 1 secnd signal that the job is done with the result 'done'
// // //   setTimeout(() => resolve('done'),1000);
// // //  })
// // //whats the output of the code below?
// // // let promise = new Promise(funcaiton(resolve, reject) {
// // //   resolve(1);
// // //   setTimeout(() => resolve(2), 1000);
// // // })
// // // promise.then(alert); 

// // // //the output is 1

// // // //dealy with a promise
// // // function delay(ms) {
// // //   return new Promise (resolve => setTimeout(resolve,ns))
// // // }
// // // delay(3000).then(() => alert('run after 3 seconds'));
// // //********* */
// // //return an array where the first elemt is the count of psotive snumbers and the second elements is usm of tnegative numbers o is netiher postive or negative 
// // function countPositivesSumNegatives(input) {
// //     // first you need to set up placeholders for you values
// //     let postiveCount = 0;
// //     let negativeSum = 0;
    
// //     //now you need loop through
// //     for (let i = 0; i < input.length; i++) {
    
// //     //now you need your conditionals
// //       if (input[i]>0){
// //         postiveCount ++;
// //       } else if (input[i]<0){
// //         negativeSum += input[i]
// //     }
// //     }
      
// //       //now return the requested values
// //       return [postiveCount, negativeSum]
  
// //   }

// //***** */
// //Make a function that will return a greeting statement that uses an input; your program should return,
// //"Hello, <name> how are you doing today?"
// // function greet(name) {
// //   return `Hello ${name} how are you doing today?`
// // }

// //***write a funcation remove exclatmiomarks which removes all exlamation markes from a give string */
// // function removeExclamationMarks(s) {
// //   return s.replace(/!/g,'').trim();
// // }
// //This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// // function simpleMultiplication(number){
// //   if (number % 2 === 0) {
// //     number *= 8
// //   } else {
// //     number*=9
// //   }
// //   return number
// // }
// // //***ou are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// // If it is a square, return its area. If it is a rectangle, return its perimeter./// */
// const areaOfPerimeter = function(l,w){
//   if ( l == w) {
//     return area = l*w
//   } else {
//     return permi = l + l + w + w 
//   }
// }

//write a funtion that claculates the original product price without VAT
//return price without vat
//return price without vat
//return price without vat
function excludingVatPrice(price){
  if ( price < 0){
    return "price cannot be negative"
  }
  let cal = (price/(1+.15)).toFixed(2);
  return Number(cal);
}