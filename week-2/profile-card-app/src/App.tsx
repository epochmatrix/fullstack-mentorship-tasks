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
  <div className="min-h-screen bg-linear-to-b from-green-50 via-green-200 to-green-900 text-white p-8 flex flex-col items-center">
    {/* Header */}
    <header className="text-center my-10 max-w-2xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950 mb-4">
        Team Profile Directory
      </h1>

      <p className="text-green-900/80 text-base sm:text-lg leading-relaxed">
        A responsive collection of dynamic user profiles. Built with React
        components, strict TypeScript schema types, and styled using Tailwind
        CSS v4.
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
     <footer className="mt-20 mb-6 py-6 text-sm text-white text-center flex flex-col items-center gap-2 border-t border-green-200/40 backdrop-blur-sm">
        <div>
          &copy; {new Date().getFullYear()} Profile Card App &bull; Fullstack Mentorship Tasks
        </div>
        <div className="text-sm font-semibold text-white tracking-wide leading-7 hover:text-green-200 transition-colors duration-300">
          Guided by Mentor:{" "}
          <a
              href="https://github.com/hafsusu"
            target="_blank"
            rel="noreferrer"
            className="text-white font-semibold tracking-wide hover:text-green-300 transition-all duration-300 hover:underline underline-offset-4 decoration-green-300"
          >
            Sumeya Abesha
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
