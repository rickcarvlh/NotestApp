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
// const validator = require('validator');
// console.log(validator.isEmail('andrew@example.com'));
const notes = require('./notes');
// * load chalk
const chalk = require('chalk');
// * load yargs
const yargs = require('yargs');

// * Cutomize yargs version number
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler (argv) {
    // ! old code
    // console.log('Title: ' + argv.title);
    // console.log('Body: ' + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// Create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Removing title',
      demandOption: true,
      type: 'string',
    },
  },
  handler (argv) {
    notes.removeNotes(argv.title);
  },
});

// Create a list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler () {
    console.log('Listing a note');
  },
});

// Create a note command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler  () {
    console.log('Read a note');
  },
});

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
