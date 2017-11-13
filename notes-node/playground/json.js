// var obj ={
//  name:'Himanhsu'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name":"Himanshu","age":23}';
// var person = JSON.parse(personString);
// console.log(person);


const fs = require('fs');
var originalNote = {
	title:"Himanshu as Title",
	body:"Some Body"
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);
var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
