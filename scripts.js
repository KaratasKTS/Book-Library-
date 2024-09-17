const bookTitle = document.getElementById('book-title');
const value = bookTitle.value;
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookStatus = document.getElementById('status');
const submit = document.getElementById('submit');

//gets value from inputs
//passes the values into the book contructor 
//pushes the objects to library aray  
function getValue(){
    const bookTitle = document.getElementById('book-title');
    const value = bookTitle.value;
console.log(value);
};



let library = [];

function book (title,author,pages,read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};



