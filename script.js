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

function addBook() {
  thebooks = JSON.parse(localStorage.getItem('books'));
  const result = Object.values(thebooks);
  const newTitle = titleElem.value;
  const newAuthor = authorElem.value;
  const newBook = {title: newTitle, author: newAuthor};
  thebooks.push(newBook);
  console.log(thebooks);
  localStorage.setItem('books', JSON.stringify(thebooks));
  updateBooks();
}

function deleteBook(el) {
  const titleToDelete = el.previousElementSibling.previousElementSibling.textContent;
  const authorToDelete = el.previousElementSibling.textContent;
  thebooks = JSON.parse(localStorage.getItem('books'));
  var result = Object.values(thebooks);
  var index = result.findIndex(p => p.title == titleToDelete && p.author == authorToDelete);
  console.log(index);
  result.splice(index,1);
  localStorage.setItem('books', JSON.stringify(result));
  updateBooks();
}
