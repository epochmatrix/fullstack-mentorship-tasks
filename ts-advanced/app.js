"use strict";
//Thursday: finction , object & interface 
Object.defineProperty(exports, "__esModule", { value: true });
// 2. creating data using the interface
const student1 = {
    id: 101,
    name: "Reyan abdulmejid",
    email: "abdulmejidreyan@gmail.com",
    address: {
        city: "Addis Ababa",
        subCity: "CMC",
        country: "Ethiopia"
    },
    enrolledCourses: [
        { id: "CS101", title: "Introduction to Computer Science", creditHours: 3 },
        { id: "CS102", title: "Data Structures and Algorithms", creditHours: 4 },
        { id: "CS103", title: "Database Management Systems", creditHours: 3 }
    ]
};
// 3. display
const displayStudentInfo = (student, showCourses = true) => {
    console.log(`\n ===== Mentorship Student Details =====`);
    console.log(`Student ID: ${student.id} | Name: ${student.name} | Email: ${student.email}`);
    console.log(`Address: ${student.address.city}, ${student.address.subCity || "N/A"}, ${student.address.country}`);
    // display enrolled courses if showCourses is true
    if (showCourses) {
        console.log(`=== Enrolled Courses ===`);
        student.enrolledCourses.forEach((course) => {
            console.log(`* [${course.id}] ${course.title} (${course.creditHours} Cr.Hrs)`);
        });
    }
    ;
};
// 4. function with type return value 
const enrollNewCourse = (student, newCourse) => {
    student.enrolledCourses.push(newCourse);
    console.log(`Successfully enrolled in: ${newCourse.title}`);
    return student.enrolledCourses.length;
};
//add new course and display updated student info
displayStudentInfo(student1);
const advancedTS = { id: "CS104", title: "Advanced Interfaces & Narrowing", creditHours: 3 };
const totalCourses = enrollNewCourse(student1, advancedTS);
console.log(`Total Enrolled Courses now: ${totalCourses}`);
displayStudentInfo(student1);
//# sourceMappingURL=app.js.map