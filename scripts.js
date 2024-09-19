
const submit = document.querySelector('.submit');
const dialog = document.querySelector('.dialog');
const closeDialog = document.querySelector('.closeDialog');
closeDialog.onclick = () =>{
    dialog.close();
}

const start = document.querySelector('.start');
start.onclick = () =>{
dialog.showModal();
}

let library = [];


function book (title,author,pages,read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function getValue(event) {
    event.preventDefault();

    // Prevent the form from submitting
    
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const readStatus = document.getElementById('status-read');
    readStatus.value = undefined;
    
    // Check if elements exist and extract values
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const read = readStatus.checked ? "Read" : "not read";
 

    //create book object, passing the input values 
    let object = new book(title, author, read);
    library.push(object);

    
    // Logging the values
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Status:', read);
    
    console.log(library);
    console.log( library[2].title);

    
}








//gets value from inputs
//passes the values into the book contructor 
//pushes the objects to library aray 
