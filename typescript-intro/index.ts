//Full TypeScript code for the given context

// 1. primitive types and explicit tying

let mentorName: string = "Huzurum"; 
let mentorshipWeeks: number = 8;
let isMentorAvailable: boolean = true;

// 2. inferred typing 

let studentName = "Reyan abdulmejid"; 
let currentWeek = 1;
let currentYear = 2026; 
let greating = "Hello, welcome to the mentorship program!";

// 3. type alias

type studentID = number | string;

type studentProfile = {
    id: studentID;
    name: string;
    age: number;
    isActive: boolean;
    major: string;
};

let student1: studentProfile = {
    id: 101,
    name: "Reyan abdulmejid",
    age: 22,
    isActive: true,
    major: "Computer Science"
};


// 4. function & reusable code

const displayStudent = (student: studentProfile): void => {
    console.log("Student Profile:");
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Age: ${student.age}`);
    console.log(`Is Active: ${student.isActive}`);
    console.log(`Major: ${student.major}`);
}

// logs

console.log(`Mentorship Program Details:`);
console.log(`Student: ${studentName} | Mentor: ${mentorName}`);
console.log(`Duration: ${mentorshipWeeks} weeks | Current Week: ${currentWeek} | Year: ${currentYear}`);

//callling function to display student profile
displayStudent(student1);

