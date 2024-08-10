const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    const title = document.createElement('h2');
    title.classList.add('book-title');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.classList.add('book-author');
    author.textContent = 'by ' + book.author;

    const pages = document.createElement('p');
    pages.classList.add('book-pages');
    pages.textContent = book.pages + ' pages';

    const readStatus = document.createElement('p');
    readStatus.classList.add('book-read-status');
    readStatus.textContent = book.read === 'Yes' ? 'Already read' : 'Not yet read';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    removeButton.addEventListener('click', () => {
        bookCard.remove();
    })

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(removeButton);

    document.body.appendChild(bookCard);
}

document.getElementById('newBookBtn').addEventListener('click', () => {
    const form = document.getElementById('newBookForm');
    form.classList.toggle('hidden');
});

document.getElementById('newBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);
    
    this.reset();
    this.classList.add('hidden'); // Ensure this is targeting the correct element
});
