"use strict";
//Full TypeScript code for the given context
Object.defineProperty(exports, "__esModule", { value: true });
// 1. primitive types and explicit tying
let mentorName = "Huzurum";
let mentorshipWeeks = 8;
let isMentorAvailable = true;
// 2. inferred typing 
let studentName = "Reyan abdulmejid";
let currentWeek = 1;
let currentYear = 2026;
let greating = "Hello, welcome to the mentorship program!";
let student1 = {
    id: 101,
    name: "Reyan abdulmejid",
    age: 22,
    isActive: true,
    major: "Computer Science"
};
// 4. function & reusable code
const displayStudent = (student) => {
    console.log("Student Profile:");
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Age: ${student.age}`);
    console.log(`Is Active: ${student.isActive}`);
    console.log(`Major: ${student.major}`);
};
// logs
console.log(`Mentorship Program Details:`);
console.log(`Student: ${studentName} | Mentor: ${mentorName}`);
console.log(`Duration: ${mentorshipWeeks} weeks | Current Week: ${currentWeek} | Year: ${currentYear}`);
//callling function to display student profile
displayStudent(student1);
//# sourceMappingURL=index.js.map