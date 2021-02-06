//1.Array Slice

let foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

var modifiedFood = foods.slice(1,4);
console.log(foods);
console.log(modifiedFood);



//2: Array Splice

/* The splice() method adds/removes items to/from an array, and returns the removed item(s). */

var modifiedFood = foods.splice(2,0, 'noodles', 'icecream');
console.log(foods);

//3: Filter

/* Filter is an array method. It accepts a test function 
as an argument and returns a new array with only the elements for which the test function returns true. */

var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = numberArray.filter(function (x) {
    if(x%2 === 0){
        return x;
    }
});
console.log(isEven);

function isPrime(num){
    if(num ===1){
        return false;
    }
    else if(num === 2){
        return true;
    }
    else{
        for(let i =2; i<num; i++){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }
}
console.log(numberArray.filter(isPrime));

//Function #4: Reject

/* We can now reuse the `isPrime()` function in conjunction with reject to get all the non-prime numbers in the array. 
The reject function does the opposite of the filter function. It returns an array with all the elements that do not satisfy the condition. 
Kindly note that there is no reject method in javascript arrays like filters. So you need to define a new function and make it work like reject.*/

function notPrime(array){
    let notPrimeNumber = array.filter(function(num){
        for(i=2; i<=Math.sqrt(num); i++){
            if(num%i === 0)
                return true;
        }
        return false;
    })
    console.log(notPrimeNumber);
}

//Function #5: Lambda

/* When defining short functions, it's convenient to use an alternative syntax called lambda function that allows us to define anonymous 
functions in a more compact way: _( /*arguments*/ ) => { /*code*/ }_./*If our function is only a return statement, 
we can even strip the curly brackets and avoid writing return: _( /*arguments*/ ) => /*value to return*/_.*/

var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = (num) => numberArray.filter(num=>(num%2)===0);
console.log(isEven(numberArray));


//Function #6: Map

/* Another very useful higher order function is map. It takes a function and applies it to all the elements of an array.
The syntax is identical to `filter`. */

const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers = (x) => myArray.map(x=>{
    return x*x;
})
console.log(findSquareOfNumbers(myArray));

//Function #7: Reduce

/*Reduce is the last higher order function we are going to discuss and it's also the most powerful one. 
In fact, you can implement any list transformation operation with reduce.

Reduce takes a callback function and a starting value. The callback function takes as arguments an accumulator and the value of the current 
element of the array and returns the accumulator to be used in the next cycle. 
The values returned from the last call of the callback function is the value returned by `reduce`.*/

const myArray7 = [2,3,5,10];

function multiply(array){
    let mulValue=array.reduce(function(initial, item){
        return initial*item 
    }, 1)
    console.log("multiplication value of all number in the given aaray:", mulValue)

}
multiply(myArray7)