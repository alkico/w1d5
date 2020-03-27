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
const names = ['brian', 'mike', 'alan', 'bruce'];

const lengthOfStrings = names.reduce(function (acc, val) {
    // console.log('acc is: ', acc);
    // console.log('val is:', val.length);
    return acc + val.length;
}, 0);



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
const ages = people.reduce(function (ages, person) {
    return ages + person.age;
}, 0);

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
const sumOfAllRates = product.reviews.reduce(function (sum, review) {
    return sum + review.rate
}, 0);

console.log(sumOfAllRates);