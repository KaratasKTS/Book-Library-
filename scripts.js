
const submit = document.getElementById('submit');

let library = [];


function getValue(event) {
    // Prevent the form from submitting
    event.preventDefault();

    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const bookStatus = document.getElementById('status');
    
    // Check if elements exist and extract values
    const title = bookTitle ? bookTitle.trim() : '';
    const author = bookAuthor.value;
    const status = bookStatus.value;

    //create book object, passing the input values 
    let object = new book(title, author, status);
    library.push(object);

    
    // Logging the values
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Pages:', pages);
    console.log('Status:', status);
    console.log(library);
}




function book (title,author,pages,read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


//gets value from inputs
//passes the values into the book contructor 
//pushes the objects to library aray 
