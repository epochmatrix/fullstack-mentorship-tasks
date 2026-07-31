import { ProfileCard } from "./components/ProfileCard";
import { USERS_DATA } from "./constants/user.constants";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center">
      {/* Header section displaying the app main title and description */}
      <header className="text-center my-10 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3 sm:text-5xl">
          Team Profile Directory
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          A responsive collection of dynamic user profiles. Built with React components, 
          strict TypeScript schema types, and stylized via Tailwind CSS v4 layout grids.
        </p>
      </header>

      {/* Responsive layout managing the profile cards container */}
      {/* Responsive Grid System Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4 mt-4 justify-items-center">
        {USERS_DATA.map((user) => (
          /* Passing dynamic properties via javascript spread operator */
          <ProfileCard key={user.id} {...user} />
        ))}
      </main>

       {/* Footer section with copyright metadata and mentor recognition */}
      {/* Footer section with copyright metadata and mentor recognition link */}
      <footer className="mt-20 mb-6 text-xs text-slate-600 tracking-wide text-center flex flex-col gap-1">
        <div>
          &copy; {new Date().getFullYear()} Profile Card App &bull; Fullstack Mentorship Tasks
        </div>
        <div className="text-slate-500 font-medium">
          Guided by Mentor:{" "}
          <a 
            href="https://github.com/hafsusu" 
            target="_blank" 
            rel="noreferrer" 
            className="text-indigo-400/80 hover:text-indigo-400 hover:underline transition duration-200 cursor-pointer font-semibold"
          >
            Sumeya Abesha
          </a>
        </div>git commit -m "Refactor: Link mentor name to her official GitHub profile in footer"

      </footer>
    </div>
  );
}

export default App; 

