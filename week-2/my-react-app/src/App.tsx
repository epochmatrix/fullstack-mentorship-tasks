import { StudentCard } from "./components/StudentCard";
function App() {
  // (Array of Objects)
  const students = [
    { id: "101", name: "Reyan Abdulmejid", department: "Computer Science", email: "reyan@gmail.com" },
    { id: "102", name: "Ferhan Abdulmejid", department: "Software Engineering", email: "ferhan@gmail.com" },
    { id: "103", name: "Wildan Abdulmejid", department: "Data Science", email: "wildan@gmail.com" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center">
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
        Student Directory CLI -{'>'} UI
        </h1>
        <p className="text-slate-400">
          React Components, JSX expressions, and TypeScript strictly-typed Props in action.
        </p>
      </header>

      {/* (Grid Layout) */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 mt-6">
        {students.map((student) => (
          <StudentCard 
            key={student.id}
            id={student.id}
            name={student.name}
            department={student.department}
            email={student.email}
          />
        ))}
      </main>

      <footer className="mt-16 text-xs text-slate-600">
        Week 2 - Tuesday Learning Exercise
      </footer>
    </div>
  );
}

export default App;


