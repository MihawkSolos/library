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

printLibrary(myLibrary);



const bookBtn = document.querySelector('.book');
const libraryContainer = document.querySelector('.library');

// have form show up when user clicks on the new book btn
bookBtn.addEventListener('click', () => {
    document.getElementById('form-container').style.visibility = 'visible';
})