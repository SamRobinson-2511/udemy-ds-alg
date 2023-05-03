//Big O introduction
//https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12133490#notes

// const nemo = ['nemo']
// const more = ['sam', 'tom', 'libby', 'ma', 'pa']
// const large = new Array(10).fill('nemo')


// function findNemo(array){
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('found NEMO!')
//         } else {
//             console.log('unfound')
//         }
//     }
//     let t1 = performance.now();
//     console.log('Time ' + (t1-t0)+'ms')
// }

// findNemo(large);


//31. O(n) = linear time 
//https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12139582#notes

//32. O(1) = constant time
//https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12139586#notes

// const nemo = ['nemo']
// const more = ['sam', 'tom', 'libby', 'ma', 'pa']
// const large = new Array(10).fill('nemo')


// function findNemo(array){
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('found NEMO!')
//         } else {
//             console.log('unfound')
//         }
//     }
//     let t1 = performance.now();
// }

// findNemo(large);

// const boxes = [0,1,2,3,4]
// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]); // O(1)
//     console.log(boxes[1]); //O(1)
// }

// logFirstTwoBoxes(boxes);

//34. Solution: Big O Calculation

// function funChallenge(input){
//     let a = 10; //O(1)
//     a = 50 + 3; //O(1)

//     for (let i = 0; i < input.length; i++){ //O(n)
//         anotherFunction(); //O(n)
//         let stranger = true; //O(n)
//         a++; //O(n)
//     }
//     return a; //O(1)
// }

//total = 3 + n + n + n + n
//BIG O = 3 + 4n

//35. Simplifying Big O
// 1. Worst Case Scenario
// -always calculate worst case scenario
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array){
    for (let i = 0; i < array.length; i++){
        console.log('running');
        if (array[i] === 'nemo'){
            console.log('found NEMO');
            break; //always look for worst case 
        }
    }
}
findNemo(everyone);
// - 
// 2. Remove Constants
function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items);
    let middleIndex = Math.floor(items.length/2);
    let index = 0;

    while (index < middleIndex){
        console.log(items[index]);
        index++;
    }
    for (let i = 0; i < 100; i++){
        console.log('hi');
    }
}
//this is all O(n)

// 3. Different Terms for Inputs = O(a + b)

//41. O(n^2) = quadratic time 
//log all pairs of an array
const boxes = ['a','b','c','d','e'];
function logAllPairsOfArray(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j <  array.length; j++){
            console.log(array[i], array[j] );
        }
    }
}
logAllPairsOfArray(boxes);
//any step in same indentation is additive 
//any nested step is multiplied



// 4. Drop non - dominants 
function printAllNumbersThenAllPairSums(numbers){
    console.log('these are the numbers');
    numbers.forEach(function(number){
        console.log('number');
    });
    console.log('and these are their sums: ');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber)
        })
    })
}

printAllNumbersThenAllPairSums([1,2,3,4,5]) //O(n^2)


//48. Space complexity exercise

function boooo(n){
    for (let i = 0; i < n.length; i++){
        console.log('booooo')
    }
}

boooo([1,2,3,4,5])//space complexity of 0(1) because i is only declared variable

function arrayOfHiNTimes(n){
    let hiArray = [];
    for (let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    console.log(hiArray);
}

arrayOfHiNTimes(6) //O(n) because we're creating a data structure 

//49. Exercise: Twitter
// find first, find nth tweet

const array = ['hi', 'my', 'teddy'];
console.log(array[0]); //O(1)
console.log(array[array.length-1]); //O(1)

const array2 = [{
    tweet: 'hi', 
    date: 2012
    }, {
    tweet: 'my', 
    date: 2014
    }, {
    tweet: 'teddy', 
    date: 2018
}]; //O(n^2) time because they're nested loops

console.log('heareawe;dlkajsdfasdf'.length) //simple property of object in JS, O(1)




