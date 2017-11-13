 console.log("Hey statring notes.js");
 const fs =require('fs'); 
var addNote = (title,body)=>{

	var notes = [];
	var note = {
		title,body
	};
	try{
	var notesString = fs.readFileSync('notes-data.json');
	notes = JSON.parse(notesString);
	}catch(e)
	{

	}
	var duplicateNotes = notes.filter((note)=> note.title === title);
	if (duplicateNotes.lenth===0) {
		notes.push(note);
	 	fs.writeFileSync('notes-data.json',JSON.stringify(notes))

	}
};
var getAll = (title)=>{
	console.log('getall');

};
var getNote = (title)=>{
	console.log('getNote');

};
var removeNote = (title)=>{
	console.log('removeNote');

};
module.exports = {
addNote,
getAll,
getNote,
removeNote
};