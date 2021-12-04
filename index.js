


const noteSection = document.getElementsByClassName("note-section")
const addButton = document.getElementsByClassName("add_Button")



//create specfics of Rusty ToDO


function addRustyToDo (){ 

const newNote = document.createElement("section")
newNote.innerHTML = "new note"
noteSection[0].appendChild(newNote)



}

function deleteRustyToDo (){ 
// deleteThisNote = document.getElementsByClassName("note-section")[noteSection.length-1].remove()
noteSection.removeChild(noteSection.childNodes[0]) 
//list.removeChild(list.childNodes[0])

}