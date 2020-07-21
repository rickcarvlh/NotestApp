// ! Õld code not used
// const fs = require('fs');

// const getNotes = () => {
//   return fs.writeFileSync('notesV2.txt', 'Your notes...!');
// };

// module.exports = getNotes;
const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...!';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) =>  note.title === title);

  // if no duplicate notes i can push to array
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken'));
  }

  saveNotes(notes);
  console.log(notes);
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  // faz overwrite ao ficheiro todo ou seja escreve sempre o ficheiro de novo e não apenas novas alaterações
  fs.writeFileSync('notes.json', dataJson, { encoding: 'utf8' });
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

// removeNotes
const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => 
    // remove what is not equal to title the rest delete
     note.title !== title
  );

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('Note note found'));
  }

  console.log(title);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
};
