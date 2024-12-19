const boxesContainer = document.getElementById('js-notearea')

function saveNotes(){
    const notes = [];
    const noteContainers = document.querySelectorAll('.note-container');
    noteContainers.forEach((container)=>{
        const text = container.querySelector('textarea').value
        notes.push(text);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes(){
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    savedNotes.forEach((notecontent)=>{
        add_note(notecontent)
    })
}

function add_note(content =''){
    let noteContainer = document.createElement('div');
    noteContainer.className = 'note-container';
    
    //creating editable textarea
    const textarea = document.createElement('textarea')
    textarea.className = 'note-area'
    textarea.placeholder = "Start Typing";
    textarea.value = content

    //delete icon
    let img = document.createElement("img");
    img.src = 'images/delete.png';
    img.className = 'delete-icon'

    //delete functionality
    img.addEventListener('click', ()=>{
        boxesContainer.removeChild(noteContainer);
        saveNotes()
    })
    //Appending to elements
    noteContainer.appendChild(textarea)
    noteContainer.appendChild(img)

    //Appending to main container
    boxesContainer.appendChild(noteContainer)

    //Saving on textarea input
    textarea.addEventListener('input', saveNotes);
    saveNotes()
}
document.addEventListener('DOMContentLoaded', loadNotes);



