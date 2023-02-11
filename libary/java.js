let myLibrary = [];
const form = document.querySelector("#newBook");
const button = document.querySelector("#consoleLog");
const titleInput = document.querySelector("#titleTextBox");
const authorInput = document.querySelector("#authorTextBox");
const pagesInput = document.querySelector("#pagesTextBox");
const readInput = document.querySelector("#readTextBox");
const container = document.querySelector('#container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getUserInfo();
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    
});
button.addEventListener('click', () => console.log(myLibrary));


// Creates new Book Object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

//Creates new Book Element and adds it to the Library
function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    clearLibraryDisplay();
    addBookTile(myLibrary);

}

//Gets the Values entered in the Form and then plugs it into addBookToLibrary
function getUserInfo(){
    let title = document.getElementById("titleTextBox").value;
    let author = document.getElementById("authorTextBox").value;
    let pages = document.getElementById("pagesTextBox").value;
    let read = document.getElementById("readTextBox").value;
    addBookToLibrary(title, author, pages, read);
    console.log(myLibrary);
    closeForm();
}

//Loops through the Library Array and adds it to the List on Screen
function addBookTile(array){
    let length = myLibrary.length;
    for (i = 0; i < length; i++) {
        let newBook = document.createElement("p");
        newBook.textContent = 
        `Title: ${myLibrary[i].title}
        Author: ${myLibrary[i].author}
        Pages: ${myLibrary[i].pages}
        Read: ${myLibrary[i].read}`
        container.appendChild(newBook);
    }
}

//Opens Display of Form to Add New Book
function openForm(){
    document.getElementById("newBookForm").style.display = "block";
}

//Closes Form when you Submit the New Book
function closeForm(){
    document.getElementById("newBookForm").style.display = "none";
}

function clearLibraryDisplay(){
    let child = container.lastElementChild;
    while (child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}