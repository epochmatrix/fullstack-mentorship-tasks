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

// Function to initialize the library with some books
console.log("Library Management System Core Configuration Initialized!");

// 4. Function to add a book to the library - FIXED
export const addBook = (id: string, title: string, author: string): boolean => {
    // Trim and normalize the inputs
    const normalizedId = id.trim();
    const normalizedTitle = title.trim();
    const normalizedAuthor = author.trim();
    
    // Check for duplicate ID (case-insensitive)
    const isIdDuplicate = library.some(book => 
        book.id.toLowerCase() === normalizedId.toLowerCase()
    );
    
    if (isIdDuplicate) {
        console.log(`\n❌ Validation Error: A book with ID "${normalizedId}" already exists in the library!`);
        return false; 
    }
    
    // Check if book already exists with same title and author (optional, but good practice)
    const isDuplicateBook = library.some(book => 
        book.title.toLowerCase() === normalizedTitle.toLowerCase() &&
        book.author.toLowerCase() === normalizedAuthor.toLowerCase()
    );
    
    if (isDuplicateBook) {
        console.log(`\n⚠️ Warning: A book with the same title and author already exists!`);
        // You can decide whether to allow this or return false
        // return false;
    }
    
    const newBook: Book = { 
        id: normalizedId, 
        title: normalizedTitle, 
        author: normalizedAuthor, 
        isBorrowed: false 
    };
    
    library.push(newBook);
    console.log(`\n✅ Book "${normalizedTitle}" (ID: ${normalizedId}) added successfully to the library!`);
    return true;
};

// 5. Function to search for a book by title or author
export const searchBook = (query: string): Book | null => {
    const searchQuery = query.trim().toLowerCase();
    
    if (!searchQuery) {
        console.log(`\n⚠️ Please enter a valid search term.`);
        return null;
    }
    
    const foundBooks = library.filter(book => 
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
    );
    
    if (foundBooks.length === 0) {
        console.log(`\n❌ No book found matching "${query.trim()}".`);
        return null;
    }
    
    if (foundBooks.length === 1) {
        const book = foundBooks[0];
        console.log(`\n✅ Found: "${book.title}" by ${book.author} [status: ${book.isBorrowed ? 'Borrowed' : 'Available'}]`);
        return book;
    } else {
        console.log(`\n📚 Found ${foundBooks.length} books matching "${query.trim()}":`);
        foundBooks.forEach((book, index) => {
            console.log(`  ${index + 1}. "${book.title}" by ${book.author} [ID: ${book.id}] | Status: ${book.isBorrowed ? 'Borrowed' : 'Available'}`);
        });
        return foundBooks[0]; // Return the first match
    }
};

// 6. Function to borrow a book by id
export const borrowBook = (id: string): boolean => {
    const normalizedId = id.trim();
    const book = library.find(b => b.id.toLowerCase() === normalizedId.toLowerCase());
    
    if (book) {
        if (book.isBorrowed) {
            console.log(`\n❌ Sorry "${book.title}" is already borrowed.`);
            return false;
        }
        book.isBorrowed = true;
        console.log(`\n✅ You have successfully borrowed "${book.title}".`);
        return true;
    }
    
    console.log(`\n❌ Book with ID "${normalizedId}" not found.`);
    return false;
}; 

// 7. remove book - FIXED
export const removeBook = (id: string): void => {
    const normalizedId = id.trim();
    const bookExists = library.some(b => b.id.toLowerCase() === normalizedId.toLowerCase());
    
    if (bookExists) {
        const bookToRemove = library.find(b => b.id.toLowerCase() === normalizedId.toLowerCase());
        library = library.filter(b => b.id.toLowerCase() !== normalizedId.toLowerCase());
        console.log(`\n✅ Book "${bookToRemove?.title}" (ID: ${normalizedId}) removed from library.`);
    } else {
        console.log(`\n❌ Cannot remove: Book ID "${normalizedId}" not found.`);
    }
};

// 8. list all books
export const listBooks = (): void => {
    if (library.length === 0) {
        console.log("\n📚 The library is currently empty.");
        return;
    }
    
    console.log("\n======= 📚 Library Book Collection =======");
    library.forEach((book, index) => {
        const status = book.isBorrowed ? "🔴 Borrowed" : "🟢 Available";
        console.log(`${index + 1}. [ID: ${book.id}] "${book.title}" by ${book.author} | Status: ${status}`);
    });
    console.log("=========================================\n");
};

// 9. Function to display the library menu and handle user input
export const showLibraryMenu = (): void => {
    console.log("\n=== 📚 TS Library Management CLI ===");
    console.log("1. Add a Book");
    console.log("2. List All Books");
    console.log("3. Search Book (by Title/Author)");
    console.log("4. Borrow a Book");
    console.log("5. Remove a Book");
    console.log("6. Exit");

    rl.question("\nChoose an option (1-6): ", (choice: string) => {
        const option = choice.trim();

        switch (option) {
            case '1':
                rl.question("Enter Book ID: ", (id) => {
                    rl.question("Enter Book Title: ", (title) => {
                        rl.question("Enter Book Author: ", (author) => {
                            addBook(id, title, author);
                            showLibraryMenu();
                        });
                    });
                });
                break;
                
            case '2':
                listBooks();
                showLibraryMenu();
                break;
                
            case '3':
                rl.question("Enter Title or Author to search: ", (query) => {
                    searchBook(query);
                    showLibraryMenu();
                });
                break;
                
            case '4':
                rl.question("Enter Book ID to borrow: ", (id) => {
                    borrowBook(id);
                    showLibraryMenu();
                });
                break;
                
            case '5':
                rl.question("Enter Book ID to remove: ", (id) => {
                    removeBook(id);
                    showLibraryMenu();
                });
                break;
                
            case '6':
                console.log("\n👋 Thank you for visiting the TS Library. Goodbye!");
                rl.close();
                break;
                
            default:
                console.log("\n❌ Invalid selection! Please enter a number between 1 and 6.");
                showLibraryMenu();
                break;
        }
    });
};

// Start the application
showLibraryMenu();