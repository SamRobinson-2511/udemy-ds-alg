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
        // console.log('running');
        if (array[i] === 'nemo'){
            // console.log('found NEMO');
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
            // console.log(array[i], array[j] );
        }
    }
}
logAllPairsOfArray(boxes);
//any step in same indentation is additive 
//any nested step is multiplied



// 4. Drop non - dominants 
function printAllNumbersThenAllPairSums(numbers){
    // console.log('these are the numbers');
    numbers.forEach(function(number){
        // console.log('number');
    });
    // console.log('and these are their sums: ');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            // console.log(firstNumber + secondNumber)
        })
    })
}

printAllNumbersThenAllPairSums([1,2,3,4,5]) //O(n^2)


//48. Space complexity exercise

function boooo(n){
    for (let i = 0; i < n.length; i++){
        // console.log('booooo')
    }
}

boooo([1,2,3,4,5])//space complexity of 0(1) because i is only declared variable

function arrayOfHiNTimes(n){
    let hiArray = [];
    for (let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    // console.log(hiArray);
}

arrayOfHiNTimes(6) //O(n) because we're creating a data structure 

//49. Exercise: Twitter
// find first, find nth tweet

const array = ['hi', 'my', 'teddy'];
// console.log(array[0]); //O(1)
// console.log(array[array.length-1]); //O(1)

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

// console.log('heareawe;dlkajsdfasdf'.length) //simple property of object in JS, O(1)


//50. JavaScript loops
const findNemo2 = array => {
    array.forEach(fish => {
        if(fish === 'nemo'){
            // console.log('Found Nemo!')
        }
    })
}

const findNemo3 = array => {
    for(let fish of array){
        if (fish === 'nemo'){
            console.log('Found Nemo!')
        }
    }
}

findNemo2(["nemo"])


//Google Interview
//https://www.youtube.com/watch?v=XKu_SEDAykw

//Give 2 arrays, create a function that lets a user know (bool) whether these arrays 
//contain any common items

// const arr1 = [0,2,4,6];
// const arr2 = [0,2,5,7];

// function sameThing(array1, array2){
//     for (let i = 0; i < array1.length; i++){
//         for (let j = 0; j < array2.length; j++){
//             if(array1[i]===array2[j]){
//                 console.log(true)
//             }
//         }
//     }
//     console.log(false);
// }

// sameThing(arr1, arr2) //O(a*b) because arrays can be differently sized, brute force

const arr1 = ['a','b','c','x'];
const arr2 = ['z','y','a'];
const arr3 = ['d', 'e'];

//array1 ==> object{
//  a: true,
//  b: true,
//  c: true,
//  x: true
//}

//array2[index] = object.properties;

// function containsCommonItem(array1, array2){
//     //loop through first array and create object where
//     //properties = items in array
//     //loop through second array and check if 
//     // item in second array exists on created object
//     // two separate for loops
//     let map = {};
//     for (let i=0; i<array1.length; i++){
//         if(!map[array2[i]]){
//             const item = array1[i];
//             map[item] = true;
//         }
//     }
//     for (let j=0; j<array2.length;j++){
//         if(map[array2[j]]){
//             return true;
//         }
//     }
//     return false;
// }
// //O(a+b), better with time complexity 
// //downsides: object properties might not work with non-literal values
// //could be more readable 

// containsCommonItem(arr1,arr2);

//error handling: assume always two parameters in function
//clear naming of variables 


//solutions with JavaScript, more readable 
function containsCommonItem2(array1, array2){
    return array1.some(item=>array2.includes(item))
}


// console.log(containsCommonItem2(arr1, arr3));

////////////GOOGLE INTERVIEW
//NAIVE
function hasPairWithSum(arr, sum){
    const length = arr.length;
    for(let i = 0; i<length-1; i++){
        for(let j = i+1; j<length; j++){
            if(arr[i] + arr[j] === sum)
            return true;
        }
    }
    return false;
}

// console.log(hasPairWithSum([0,2,5], 7))

//BETTER
function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const length = arr.length;
    for (let i = 0; i < length; i++){
        if (mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}
// console.log(hasPairWithSum2([0,2,5], 7));

//DATA STUCTURES AND ALGORITHMS

const strings = ['a', 'b', 'c', 'd'];
// to store 4 items on a 32 bit system
// 4 * 4 uses 16 bytes of storage
//stored in sequential order in ram 
// console.log(strings[2])

//push: add something to end of array 

strings.push('e');
// console.log(strings);//O(1)
//pop: removes 
const x = strings.pop(); //O(1)
// console.log(x)

//unshift: add to front of array
strings.unshift('x');//O(n) to reassign indices 
// console.log(strings)

//splice: insertion/deletion
strings.splice(2, 0, 'alien');//O(n/2), simplified to O(n)
// console.log(strings)

//C++ 
// int a[20];
// int b[5] {1,2,3,4,5}

//JS automatically allocates memory based on size of array 
// don't need to think about memory management 
//dynamic array expands as we add more elements, becomes O(n) when we append to an array 
const strings2 = ['a', 'b', 'c', 'd'];


//69.

//reference type
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

//context v. scope
const object4 = {
    a: function(){
        console.log(this);
    }
}

//instantiation: make a copy of object and reuse the code 
// class Player {
//     constructor(name, type){
//         console.log(this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`Hi, I am ${this.name} and I'm a ${this.type}`)
//     }
// }

// class Wizard extends Player {
//     constructor(name, type){
//         super(name, type)
//     }
//     play(){
//         console.log(`Weeee, I'm a ${this.type}`)
//     }
// }

// const wizard1 = new Wizard('Shelly', 'Healer')
// const wizard2 = new Wizard('Shawn', 'Dark Magic')

let user = {
    age: 54, 
    name: "Kylie", 
    magic: true, 
    scream: function(){
        console.log('ahhhhh')
    }
}
//all placed in memory
// console.log(user.age);//O(1)
user.spell = 'abracadabra';//O(1)
// console.log(user.spell)//O(1)
// console.log(user.scream);//O(1)


//implement a hash table 
class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % 
            this.data.length;
            // console.log(hash);
        }
        return hash;
    }
    set(key, value){
        let address = this._hash(key); //store data at this address space
        if (!this.data[address]){
            this.data[address] = [];
            // this.data[address].push(key, value)
            // console.log(this.data);
        }
        this.data[address].push(key, value);
        return this.data;
        console.log(this.data)
    }
    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket)
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][0];
                }
            }
        } //O(1)
        return undefined;
    }
    keys(){//iterate through all keys
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                // console.log(this.data[i][0])
                keysArray.push(this.data[i][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
// myHashTable._hash('grapes');
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
// myHashTable.get('grapes');
myHashTable.keys();


//Google Question: First recurring characters 
// Given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// it should return 1

//Given an array = [2, 3, 4, 5]
//It should return undefined 

//naive approach 

function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++){
        for (let j = i+1; j < input.length; j++){
            if (input[i] === input[j]){
                console.log(input[i])
                return input[i];
            }
        }
    }
    return undefined;
}

firstRecurringCharacter([1,5,1,2,3,5,1,2,4]) //nested loop = O(n^2)


//create hash table 
function firstRecurringCharacter2(input){
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        } else {
            map[input[i]] = i
        }
    }
    return undefined;
}

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])










//84: Keys












