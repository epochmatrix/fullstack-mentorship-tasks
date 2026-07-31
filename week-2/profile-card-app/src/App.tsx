import { ProfileCard } from "./components/ProfileCard";
import { USERS_DATA } from "./constants/user.constants";
import { type UserProfile } from "./types/user.types";

function App() {
  // Professional Validation: Filter out users with duplicate IDs or GitHub profiles
  const uniqueUsers: UserProfile[] = [];
  const seenIds = new Set<string>();
  const seenGithubs = new Set<string>();

  for (const user of USERS_DATA) {
    // Clean and normalize data for exact matching
    const userId = user.id.trim();
    const userGithub = user.socials.github.trim().toLowerCase();

    // Check if ID or GitHub Link has already been used in the system
    if (!seenIds.has(userId) && !seenGithubs.has(userGithub)) {
      seenIds.add(userId);
      seenGithubs.add(userGithub);
      uniqueUsers.push(user); // Allow unique user to pass through
    } else {
      // Log warning for developers in the browser console
      console.warn(`[Validation Notice] Skipped duplicate entry: Name: "${user.name}", ID: "${user.id}"`);
    }
  }

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

      {/* Responsive layout managing the profile cards container with auto-centering utility */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4 mt-4 justify-items-center">
        {/* Rendering only the validated, unique set of users */}
        {uniqueUsers.map((user) => (
          /* Passing dynamic properties via javascript spread operator */
          <ProfileCard key={user.id} {...user} />
        ))}
      </main>

      {/* Footer section with copyright metadata and mentor recognition link */}
      <footer className="mt-20 mb-6 text-xs text-slate-600 tracking-wide text-center flex flex-col gap-1">
        <div>
          &copy; {new Date().getFullYear()} Profile Card App &bull; Fullstack Mentorship Tasks
        </div>
        <div className="text-slate-500 font-medium">
          Guided by Mentor:{" "}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-indigo-400/80 hover:text-indigo-400 hover:underline transition duration-200 cursor-pointer font-semibold"
          >
            Sumeya Abesha
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
