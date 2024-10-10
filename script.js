const myLibrary = [];

// capital first letter of fucntion name represent constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (title, author, pages, read) {
    const book = new Book (title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('One piece', 'Oda', 2000, 'Read');
addBookToLibrary('Naruto', 'Kishimoto', 1000, 'Read');
addBookToLibrary('To Kill A Mockingbird', 'Harper Lee', 400, 'Not Read');



function printLibrary (myLibrary) {
    libraryContainer.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
        const card = document.createElement('div');
        card.classList.add('card');
        // content i want in the card div
        card.innerHTML = `
            <h3>${myLibrary[i].title}</h3>
            <p>Author: ${myLibrary[i].author}</p>
            <p>Pages: ${myLibrary[i].pages}</p>
            <p>Read: ${myLibrary[i].read}</p>
            `;

        //adding btns to update the read status
        const readBtn = document.createElement('button');
        readBtn.classList.add('readBtn');
        readBtn.textContent = myLibrary[i].read;

        //readBtn event listener to update the read status
        readBtn.addEventListener('click', () => {
            if(myLibrary[i].read === 'Read'){
                myLibrary[i].read = 'Not Read';
                readBtn.textContent = 'Not Read';
            } 
            else if (myLibrary[i].read === 'Not Read'){
                myLibrary[i].read = 'Read';
                readBtn.textContent = 'Read';
            }
        })
        


        // creating btn with class .cardBtn used to remove 'cards'
        const cardBtn = document.createElement('button');
        cardBtn.textContent = "Remove";
        cardBtn.classList.add('cardBtn');

        //cardBtn event listener 
        cardBtn.addEventListener('click', () => {
            card.remove(); // removes the card from the library (pretty much only removes display)
            myLibrary.splice(i,1); // removes the book from the actual library array
            printLibrary(myLibrary); // prints the updates library 
        });

        

        card.appendChild(readBtn);
        card.appendChild(cardBtn);
        libraryContainer.appendChild(card); 
    }
}





const bookBtn = document.querySelector('.book');
const libraryContainer = document.querySelector('.library');
const cancelBtn = document.querySelector('.cancel');
const submitBtn = document.querySelector('.submit');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');


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
    addBookToLibrary(authorInput.value, titleInput.value, pagesInput.value, readInput.value);
    makeHidden();
    printLibrary(myLibrary);
});


printLibrary(myLibrary);



