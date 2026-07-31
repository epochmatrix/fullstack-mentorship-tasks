// src/App.tsx
import { StudentCard } from "./components/StudentCard";
import { STUDENTS_DATA } from "./components/student.data";
function App() {

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

      {/* 2. Responsive */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-5xl px-4 mt-6">
        
        {STUDENTS_DATA.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </main>

      <footer className="mt-16 text-xs text-slate-600">
        Week 2 - Tuesday Learning Exercise
      </footer>
    </div>
  );
}

export default App;
