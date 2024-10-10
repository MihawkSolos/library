const myLibrary = [];

// capital first letter of fucntion name represent constructor
function Book (title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary (title, author) {
    const book = new Book (title, author);
    myLibrary.push(book);
}

addBookToLibrary('One piece', 'Oda');
addBookToLibrary('Naruto', 'Kishimoto');
addBookToLibrary('To Kill A Mockingbird', 'Harper Lee');

function printLibrary (myLibarary) {
    for(let i = 0; i < myLibarary.length; i++){
        console.log(myLibarary[i]);
    }
}







const bookBtn = document.querySelector('.book');
const libraryContainer = document.querySelector('.library');
const cancelBtn = document.querySelector('.cancel');
const submitBtn = document.querySelector('.submit');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');


// function to make form container visible
function makeVisible() {
    document.getElementById('form-container').style.visibility = 'visible';
}

// function to make form container 
function makeHidden() {
    document.getElementById('form-container').style.visibility = 'hidden';
}

// have form show up when user clicks on the new book btn
bookBtn.addEventListener('click', () => {
   makeVisible();
});

// remove the form container of they click cancel btn
cancelBtn.addEventListener('click', () => {
    makeHidden();
});

// if they click submit then add the author and book title
submitBtn.addEventListener('click', () => {
    event.preventDefault(); // prevent form submission from refreshing page
    addBookToLibrary(authorInput.value, titleInput.value);
    makeHidden();
    printLibrary(myLibrary);
});






