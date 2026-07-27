import * as readline from 'readline';

// 1. interface for Book
export interface Book {
    readonly id: string;
    title: string;
    author: string;
    isBorrowed: boolean; 
}

// 2. array to store books
export let library: Book[] = [];

// 3. Readline interface
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to initialize the library with some books
console.log("Library Management System Core Configuration Initialized!");

// 4.  Function to add a book to the library
eport const addBook = (id: string, title: string, author: string): void => {
    const newBook: Book = {id, title, author, isBorrowed: false};
    library.push(newBook);
    console.log(`Book "${title}" added successfully!`);
}; 

// 5. Function to search for a book by title or author
export const searchBook = (query: string): Book | null => {
    const foundBook = library.find(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    if (foundBook) {
        console.log(`\n Found: "${foundBook.title}" by ${foundBook.author} [status: ${foundBook.isBorrowed ? 'Borrowed' : 'Available'}]`);
        return foundBook;
    }; 

    console.log(`\n No book found matching "${query}".`);
    return null;
};

// 6. Function to borrow a book by id
export const borrowBook = (id: string): boolean => {
    const book = library.find(b => b.id === id);
    if (book) {
        if (book.isBorrowed) {
            console.log(`\n Sorry "${book.title}" is already borrowed.`);
            return false;
        }
        book.isBorrowed = true;
        console.log(`\n You have successfully borrowed "${book.title}".`);
        return true;
        
    }
    console.log(`\n Book with ID "${id}" not found.`);
    return false;
}; 

// 7. remove book 
export const removeBook = (id: string): void => {
    const bookExists = library.some(b => b.id === id);
    if (bookExists) {
        library = library.filter(b => b.id !== id);
        console.log(`\nBook with ID "${id}" removed from library.`);
    } else {
        console.log(`\nCannot remove: Book ID "${id}" not found.`);
    }
};

//8. list all books
export const listBooks = (): void => {
    if (library.length === 0) {
        console.log("\nThe library is currently empty.");
        return;
    }
    console.log("\n======= Library Book Collection =======");
    library.forEach((book, index) => {
        console.log(`${index + 1}. [ID: ${book.id}] "${book.title}" by ${book.author} | Status: ${book.isBorrowed ? "Borrowed" : "Available"}`);
    });
    console.log("=========================================\n");
};