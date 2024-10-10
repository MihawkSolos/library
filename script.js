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



function printLibrary (myLibrary) {
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${myLibrary[i].title}</h3>
            <p>Author: ${myLibrary[i].author}</p>
            `
        libraryContainer.appendChild(card); 
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


printLibrary(myLibrary);



