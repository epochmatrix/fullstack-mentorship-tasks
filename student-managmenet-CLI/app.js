//Student Management App

let students = []; // Array to store student records

// Function to add a new student
const addStudent = (id, name, DOB, email, department) => {
    const newStudent = {id, name, DOB, email, department};
    students.push(newStudent);
    console.log(`Student "${name}" (ID: ${id}) added successfully.`);
};

// view list students 
const listStudents = () => {
    if (student.length === 0) {
        console.log("No students found.");
    }; 

    console.log("List of Students:");
    students.forEach((student, index) => {
         console.log(`${index + 1}. ID: ${student.id} | Name: ${student.name} | DOB: ${student.DOB} | Email: ${student.email} | Dept: ${student.department}`);
    });
    console.log("===============================\n");
};

// search student by id 
const searchStudent =(id) => {

}; 

//update student
const updateStudent = (id, updatedData) => {
    
};

//delete student
const deleteStudent = (id) => {

}; 


console.log("Student Managment System Initialized");
console.log("current students:", students);
addStudent(1, "Reyan Abdulmejid", "2002-11-29", "weellyran@gmail.com", "Computer Science");
addStudent(2, "Wildan Abdulmejid", "2002-11-29", "wildan@gmail.com", "Computer Science");
addStudent(3, "Ferhan Reyan", "2002-11-29", "ferhan@gmail.com", "Computer Science");

console.log("Updated Database:", students);

listStudents();