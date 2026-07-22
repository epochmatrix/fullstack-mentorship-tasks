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
    if (students.length === 0) {
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
    const foundStudent = students.find(student => student.id === id);
    if (foundStudent) {
        console.log(`Student found: ID: ${foundStudent.id} | Name: ${foundStudent.name} | DOB: ${foundStudent.DOB} | Email: ${foundStudent.email} | Dept: ${foundStudent.department}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
        return null;
    }

}; 

//update student
const updateStudent = (id, updatedData) => {
    const index = students.findIndex(student => student.id === id); 

    if (index !== -1) {
        students[index] = { ...students[index], ...updatedData };
        console.log(`Student with ID ${id} updated successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`); 
    }
};

delete student
const deleteStudent = (id) => {
    const studentExists = students.some(student => student.id === id);

    if (studentExists) {
        students = students.filter(student => student.id !== id);
        console.log(`Student with ID ${id} deleted successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }

};


console.log("Student Managment System Initialized");
console.log("current students:", students);
addStudent(1, "Reyan Abdulmejid", "2002-11-29", "weellyran@gmail.com", "Computer Science");
addStudent(2, "Wildan Abdulmejid", "2002-11-29", "wildan@gmail.com", "Computer Science");
addStudent(3, "Ferhan Reyan", "2002-11-29", "ferhan@gmail.com", "Computer Science");

// console.log("Updated Database:", students);

// listStudents();

// searchStudent(2);
// searchStudent(5);

updateStudent(3, { email: "ferhan_new@gmail.com", department: "Software Engineering" });
listStudents();

