//Student Management App

const readline = require('readline');

let students = []; // Array to store student records

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        return;
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

//delete student
const deleteStudent = (id) => {
    const studentExists = students.some(student => student.id === id);

    if (studentExists) {
        students = students.filter(student => student.id !== id);
        console.log(`Student with ID ${id} deleted successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }

};


// console.log("Student Managment System Initialized");
// console.log("current students:", students);
// addStudent(1, "Reyan Abdulmejid", "2002-11-29", "weellyran@gmail.com", "Computer Science");
// addStudent(2, "Wildan Abdulmejid", "2002-11-29", "wildan@gmail.com", "Computer Science");
// addStudent(3, "Ferhan Reyan", "2002-11-29", "ferhan@gmail.com", "Computer Science");

// console.log("Updated Database:", students);

// listStudents();

// searchStudent(2);
// searchStudent(5);

// updateStudent(3, { email: "ferhan_new@gmail.com", department: "Software Engineering" });

// deleteStudent(2);
// listStudents();

const showMenu = () => {
    console.log("\nStudent Management System Menu:");
    console.log("1. Add Student");
    console.log("2. List Students");
    console.log("3. Search Student by ID");
    console.log("4. Update Student");
    console.log("5. Delete Student");
    console.log("6. Exit");

    rl.question("\nEnter your choice (1-6): ", (choice) => {
        switch (choice) {
            case '1':
                rl.question("Enter Student ID: ", (id) => {
                    rl.question("Enter Student Name: ", (name) => {
                        rl.question("Enter Student DOB (YYYY-MM-DD): ", (DOB) => {
                            rl.question("Enter Student Email: ", (email) => {
                                rl.question("Enter Student Department: ", (department) => {
                                    addStudent(id, name, DOB, email, department);
                                    showMenu();
                                });
                            });
                        });
                    });
                });
                break;
            case '2':
                listStudents();
                showMenu();
                break;
            case '3':
                rl.question("Enter Student ID to search: ", (id) => {
                    searchStudent(id);
                    showMenu();
                });
                break;
            case '4':
                rl.question("Enter Student ID to update: ", (id) => {
                    rl.question("Enter new Student Name (leave blank to keep unchanged): ", (name) => {
                        rl.question("Enter new Student DOB (YYYY-MM-DD, leave blank to keep unchanged): ", (DOB) => {
                            rl.question("Enter new Student Email (leave blank to keep unchanged): ", (email) => {
                                rl.question("Enter new Student Department (leave blank to keep unchanged): ", (department) => {
                                    const updatedData = {};
                                    if (name) updatedData.name = name;
                                    if (DOB) updatedData.DOB = DOB;
                                    if (email) updatedData.email = email;
                                    if (department) updatedData.department = department;
                                    updateStudent(id, updatedData);
                                    showMenu();
                                });
                            });
                        });
                    });
                });
                break;
            case '5':
                rl.question("Enter Student ID to delete: ", (id) => {
                    deleteStudent(id);
                    showMenu();
                });
                break;
            case '6':
                console.log("Exiting Student Management System. Goodbye!");
                rl.close();
                break;  
            default:
                console.log("Invalid choice. Please try again.");
                showMenu();
                break;
        }
    });   
};
console.log("🚀 Starting Student Management App...");
showMenu();
