// Second largest number in an array 
function findSecondLargest(arr) {
    let first, second;

    // There should be at least two elements
    if (arr.length < 2) {
        return "Invalid Input";
    }

    // Sort the array in ascending order
    arr.sort();

    // Start from the second last element as 
    // the largest element is at last
    for (let i = arr.length - 2; i >= 0; i--) {
        // If the element is not equal to the 
        // largest element
        if (arr[i] !== arr[arr.length - 1]) {
            return "The second largest element is " + arr[i];
        }
    }

    return "There is no second largest element";
}
console.log(findSecondLargest([12, 35, 10, 35, 10, 34, 1]));
// Output: The second largest element is 34


//Second largest number in  array
function findSecondLargestUsingIteration(arr) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }
    }

    if (secondMax === -Infinity) {
        return "No second largest element exists";
    }

    return "The second largest element is " + secondMax;
}

// Example usage:
const numbers = [12, 35 ,35 , 2, 10, 10, 34, 12];
const number = [10, 10 , 10];

// Output: The second largest element is 34
console.log(findSecondLargestUsingIteration(numbers)); 
console.log(findSecondLargestUsingIteration(number));