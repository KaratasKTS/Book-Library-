//selectors & eventListeners 
const submit = document.querySelector('.submit');
const start = document.querySelector('.start');
const dialog = document.querySelector('.dialog');
const Library = document.querySelector('.Library');
const grid = document.querySelector('.Divform');
const closeDialog = document.querySelector('.closeDialog');
closeDialog.onclick = () =>{
    dialog.close();
}


start.onclick = () =>{
dialog.showModal();
}


const openLibrary = document.querySelector('.openLibrary').onclick = () =>{
    
    Library.showModal();
    displayLibrary();
}
const closeLibrary = document.querySelector('.closeLibrary').onclick = (event)=>{
    event.stopPropagation();
    Library.close();
}




//library
let library = [];


//book Constructor
function book (title,author,read ){
    this.title = title;
    this.author = author;
    this.read = read;
};



//gets value from inputs
//passes the values into the book contructor 
//pushes the objects to library aray 

function getValue(event) {
    event.preventDefault();  
    
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const readStatus = document.getElementById('status-read');  

   
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const read = readStatus.checked ? "Read" : "Not read";  

   
    let newBook = new book(title, author, read);  
    library.push(newBook);  
}

//loops through array and then appends on the grid with the arrays objects info 
function displayLibrary(){
    grid.innerHTML = "";
    for( let i = 0; i < library.length; i++){

        let div = document.createElement('div');
        div.classList.add('child');
        div.id=`${i}`;
        div.innerHTML = 
        `<strong>Title:</strong> ${library[i].title} <br>
             <strong>Author:</strong> ${library[i].author} <br>
             <strong>Status:</strong> ${library[i].read}<br>
             <strong> change status: 
                    <fieldset>
                    <legend>Status</legend>
                    <label for="status-read-${i}">Read</label>
                    <input type="checkbox" id="status-read-${i}" ${library[i].read === "Read" ? "checked" : ""} onchange="changeStatus(${i})">
                </fieldset>
                <button type="button" class="button-basic-styles" onclick="removeBook(${i})">Remove Book</button>
            </strong>`;
        grid.appendChild(div);
        
    }
}

function removeBook(value){
    library.splice(value, 1);
    displayLibrary();
}

function changeStatus(index) {
    const checkbox = document.getElementById(`status-read-${index}`);
    library[index].read = checkbox.checked ? "Read" : "Not read";
    displayLibrary();  // Refresh the display to update the status
}



