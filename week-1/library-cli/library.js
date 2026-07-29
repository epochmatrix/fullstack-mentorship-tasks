"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.showLibraryMenu = exports.listBooks = exports.removeBook = exports.borrowBook = exports.searchBook = exports.addBook = exports.rl = exports.library = void 0;
const readline = __importStar(require("readline"));
// 2. array to store books
exports.library = [];
// 3. Readline interface
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to initialize the library with some books
console.log("Library Management System Core Configuration Initialized!");
// 4. Function to add a book to the library - FIXED
const addBook = (id, title, author) => {
    // Trim and normalize the inputs
    const normalizedId = id.trim();
    const normalizedTitle = title.trim();
    const normalizedAuthor = author.trim();
    // Check for duplicate ID (case-insensitive)
    const isIdDuplicate = exports.library.some(book => book.id.toLowerCase() === normalizedId.toLowerCase());
    if (isIdDuplicate) {
        console.log(`\n❌ Validation Error: A book with ID "${normalizedId}" already exists in the library!`);
        return false;
    }
    // Check if book already exists with same title and author (optional, but good practice)
    const isDuplicateBook = exports.library.some(book => book.title.toLowerCase() === normalizedTitle.toLowerCase() &&
        book.author.toLowerCase() === normalizedAuthor.toLowerCase());
    if (isDuplicateBook) {
        console.log(`\n⚠️ Warning: A book with the same title and author already exists!`);
        // You can decide whether to allow this or return false
        // return false;
    }
    const newBook = {
        id: normalizedId,
        title: normalizedTitle,
        author: normalizedAuthor,
        isBorrowed: false
    };
    exports.library.push(newBook);
    console.log(`\n✅ Book "${normalizedTitle}" (ID: ${normalizedId}) added successfully to the library!`);
    return true;
};
exports.addBook = addBook;
// 5. Function to search for a book by title or author
const searchBook = (query) => {
    const searchQuery = query.trim().toLowerCase();
    if (!searchQuery) {
        console.log(`\n⚠️ Please enter a valid search term.`);
        return null;
    }
    const foundBooks = exports.library.filter(book => book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery));
    if (foundBooks.length === 0) {
        console.log(`\n❌ No book found matching "${query.trim()}".`);
        return null;
    }
    if (foundBooks.length === 1) {
        const book = foundBooks[0];
        console.log(`\n✅ Found: "${book.title}" by ${book.author} [status: ${book.isBorrowed ? 'Borrowed' : 'Available'}]`);
        return book;
    }
    else {
        console.log(`\n📚 Found ${foundBooks.length} books matching "${query.trim()}":`);
        foundBooks.forEach((book, index) => {
            console.log(`  ${index + 1}. "${book.title}" by ${book.author} [ID: ${book.id}] | Status: ${book.isBorrowed ? 'Borrowed' : 'Available'}`);
        });
        return foundBooks[0]; // Return the first match
    }
};
exports.searchBook = searchBook;
// 6. Function to borrow a book by id
const borrowBook = (id) => {
    const normalizedId = id.trim();
    const book = exports.library.find(b => b.id.toLowerCase() === normalizedId.toLowerCase());
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
exports.borrowBook = borrowBook;
// 7. remove book - FIXED
const removeBook = (id) => {
    const normalizedId = id.trim();
    const bookExists = exports.library.some(b => b.id.toLowerCase() === normalizedId.toLowerCase());
    if (bookExists) {
        const bookToRemove = exports.library.find(b => b.id.toLowerCase() === normalizedId.toLowerCase());
        exports.library = exports.library.filter(b => b.id.toLowerCase() !== normalizedId.toLowerCase());
        console.log(`\n✅ Book "${bookToRemove === null || bookToRemove === void 0 ? void 0 : bookToRemove.title}" (ID: ${normalizedId}) removed from library.`);
    }
    else {
        console.log(`\n❌ Cannot remove: Book ID "${normalizedId}" not found.`);
    }
};
exports.removeBook = removeBook;
// 8. list all books
const listBooks = () => {
    if (exports.library.length === 0) {
        console.log("\n📚 The library is currently empty.");
        return;
    }
    console.log("\n======= 📚 Library Book Collection =======");
    exports.library.forEach((book, index) => {
        const status = book.isBorrowed ? "🔴 Borrowed" : "🟢 Available";
        console.log(`${index + 1}. [ID: ${book.id}] "${book.title}" by ${book.author} | Status: ${status}`);
    });
    console.log("=========================================\n");
};
exports.listBooks = listBooks;
// 9. Function to display the library menu and handle user input
const showLibraryMenu = () => {
    console.log("\n=== 📚 TS Library Management CLI ===");
    console.log("1. Add a Book");
    console.log("2. List All Books");
    console.log("3. Search Book (by Title/Author)");
    console.log("4. Borrow a Book");
    console.log("5. Remove a Book");
    console.log("6. Exit");
    exports.rl.question("\nChoose an option (1-6): ", (choice) => {
        const option = choice.trim();
        switch (option) {
            case '1':
                exports.rl.question("Enter Book ID: ", (id) => {
                    exports.rl.question("Enter Book Title: ", (title) => {
                        exports.rl.question("Enter Book Author: ", (author) => {
                            (0, exports.addBook)(id, title, author);
                            (0, exports.showLibraryMenu)();
                        });
                    });
                });
                break;
            case '2':
                (0, exports.listBooks)();
                (0, exports.showLibraryMenu)();
                break;
            case '3':
                exports.rl.question("Enter Title or Author to search: ", (query) => {
                    (0, exports.searchBook)(query);
                    (0, exports.showLibraryMenu)();
                });
                break;
            case '4':
                exports.rl.question("Enter Book ID to borrow: ", (id) => {
                    (0, exports.borrowBook)(id);
                    (0, exports.showLibraryMenu)();
                });
                break;
            case '5':
                exports.rl.question("Enter Book ID to remove: ", (id) => {
                    (0, exports.removeBook)(id);
                    (0, exports.showLibraryMenu)();
                });
                break;
            case '6':
                console.log("\n👋 Thank you for visiting the TS Library. Goodbye!");
                exports.rl.close();
                break;
            default:
                console.log("\n❌ Invalid selection! Please enter a number between 1 and 6.");
                (0, exports.showLibraryMenu)();
                break;
        }
    });
};
exports.showLibraryMenu = showLibraryMenu;
// Start the application
(0, exports.showLibraryMenu)();
