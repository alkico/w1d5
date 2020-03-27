// map - we want to transform every element to sth else

// map() vs forEach() - map() returns an array, forEach() does not
// map() doen't mutate the original array but forEach() does

// const names = ['john', 'paul', 'ringo', 'george'];

// prepend a ‘mr’ in front of the name

// const newArray = names.map(function (name) {
//     return 'Mr ' + name;
// });

// const newArray = names.forEach(function (name, i, array) {

//     array[i] = 'Mr ' + name;
//     console.log(array + 'at iteration ' + i);
// });

// console.log('newArray: ', newArray);
// console.log('names: ', names);

// const students = [
//     {
//         name: "Tony Parker",
//         firstProject: 80,
//         secondProject: 75
//     },
//     {
//         name: "Marc Barchini",
//         firstProject: 84,
//         secondProject: 65
//     },
//     {
//         name: "Claudia Lopez",
//         firstProject: 45,
//         secondProject: 95
//     },
//     {
//         name: "Carolina Perez",
//         firstProject: 85,
//         secondProject: 72,
//         finalExam: 67
//     }
// ];


// reduce() - turn a list / array of values into one value

// const numbers = [2, 4, 6, 8];


// const sum = numbers.reduce(function (sum, val) {
//     console.log('acc is: ', sum);
//     console.log('val is:', val);
//     return sum + val;
// });

// we want to add up all the sums of the letters of all the names
// const names = ['brian', 'mike', 'alan', 'bruce'];

// const lengthOfStrings = names.reduce(function (acc, val) {
//     // console.log('acc is: ', acc);
//     // console.log('val is:', val.length);
//     return acc + val.length;
// }, 0);



// console.log(lengthOfStrings);
// console.log('log: ' + 'brian' + 4 + 4 + 5);

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

// sum up all the ages in the array
// const ages = people.reduce(function (ages, person) {
//     return ages + person.age;
// }, 0);

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}

// sum up all the rates of this product using reduce
// const sumOfAllRates = product.reviews.reduce(function (sum, review) {
//     return sum + review.rate
// }, 0);

// console.log(sumOfAllRates);


// filter - iterates through the array and returns a new array with all the elements that matches the condition we set

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers);


// count the sheep from codewars - https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function countSheeps(arrayOfSheep) {
    const sheeps = arrayOfSheep.filter(function (sheep) {
        return sheep === true;
    });
    return sheeps.length;
}

array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

console.log(countSheeps(array1));

const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];

// filter for all the places that have a pool - all the places with a pool should be filtered

const placesWithPool = places.filter(function (place) {
    return place.pool === true;
});

// console.log(placesWithPool);



// Kata - filter out the geese - https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filtered = birds.filter(function (bird) {
        // return !geese.includes(bird);
        return geese.indexOf(bird) === - 1;
    })
    return filtered;
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
















