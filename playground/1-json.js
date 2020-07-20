const fs = require('fs');
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);

// console.log(parseData);
// console.log(parseData.author);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());
const dataJSON = dataBuffer.toString();
// convert JSON into Object
const user = JSON.parse(dataJSON);

user.name = 'Gunther';
user.age = 54;


const userJson = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJson);

// console.log(data.name);
// console.log(userJson);
