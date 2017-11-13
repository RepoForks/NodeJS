 console.log("start app.js"); 
 const fs = require('fs');
 const _ = require('lodash');
 const yargs = require('yargs');
 const notes = require('./notes');
 const argv = yargs.argv;

var command  = argv._[0];
if(command === 'add'){
notes.addNote(argv.title,argv.body);
}else if (command === 'list') {
	notes.getAll(argv.title);

	console.log("lsiting")
}else if (command === 'read') {
		notes.getNote(argv.title);

	console.log("reading")
}else if (command === 'remove') {
			notes.removeNote(argv.title);

	console.log("remove notes")
}else{
	console.log("Command not fonund")

}

