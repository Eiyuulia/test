// Catch
const addBook = document.getElementById("addBook");
const bookLibrary = document.getElementsByClassName("booklibrary")[0];

addBook.addEventListener('click', ()=>{
    let book = document.createElement('div');
    book.innerText = 'This is Book';
    book.style.cssText = 'background: coral; height: 150px';
    bookLibrary.appendChild(book);
})