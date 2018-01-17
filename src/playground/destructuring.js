///
/// Object Destructuring
///


// const person = {
//   name: 'Omer',
//   age: 32,
//   location: {
//     city: 'Rehovot',
//     temp: 14
//   }
// };

// const { name: firstName = "Anonymus", age, ocupation = "Unemployed"} = person;

// const { city, temp: temperature } = person.location;

// console.log(firstName, age, ocupation, city, temperature);

// const book = {
//   title: 'The Moon is A Harsh Mistress',
//   author: 'Robert Heinlein',
//   publisher: {
//     // name: 'Penguin?'
//   }
// };

// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);


///
/// Array Destructuring
///

// const address = ['Max Shein 5', 'Rehovot', 'Israel', '7666605'];

// const [ ,city , country = "Tel Aviv"] = address;

// console.log(`You're in ${city} ${country}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '&2.75'];

const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);