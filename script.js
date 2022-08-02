// localStorage.clear();
const titleElem = document.getElementById('book-title');
const authorElem = document.getElementById('book-author');
let mybooks, thebooks = [];

const initialBooks = [
  {
    title: 'Lorem ipsum',
    author: 'Testero Testyy',
    },
  {
    title: 'Second book',
    author: 'Testero Testyy',
    },
];

function updateBooks() {
if (localStorage.getItem('books')){
mybooks = JSON.parse(localStorage.getItem('books'));
document.querySelector('.books-container').innerHTML = mybooks.map((book) =>
`<div class="book-container">
  <h3 class="bookTitle">${book.title}</h3>
  <h3>${book.author}</h3>
  <button class="remove-book-button">Remove</button>
  <hr>
</div>`).join('');
}
else {
  const firstBooks = JSON.stringify(initialBooks);
  localStorage.setItem('books', firstBooks);
}

let deleteButtons = document.querySelectorAll('.remove-book-button');

deleteButtons.forEach((el) => {
  el.addEventListener('click', () => {
    deleteBook(el);
  });
});
}

updateBooks();

