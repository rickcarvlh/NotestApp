// ! Õld code not used
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was generated by node js!');

// try {
//   fs.appendFileSync('notes.txt', ', message added by appendFileSync!');
// } catch (error) {
//   console.log(error);
// }
// const add = require('./utils');
// const getNotes = require('./notes');

// const sum = add(4, -2);
//  const msg = getNotes();

// console.log(sum);
// console.log(msg);
const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);
