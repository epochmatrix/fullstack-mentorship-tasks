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
