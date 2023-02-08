let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

function getUserInfo(){
    let title = document.getElementById("titleTextBox").value;
    let author = document.getElementById("authorTextBox").value;
    let pages = document.getElementById("pagesTextBox").value;
    let read = document.getElementById("readTextBox").value;
    addBookToLibrary(title, author, pages, read);
    console.log(myLibrary);
}

const form = document.querySelector("#newBook");
form.addEventListener('submit', (e) => {
    getUserInfo();
});


