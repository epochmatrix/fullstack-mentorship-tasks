// src/components/ProfileCard.tsx
import { type UserProfile } from "../types/user.types";

export function ProfileCard({ name, role, bio, avatarUrl, skills, socials }: UserProfile) {
  return (
    <div className="bg-white/85 backdrop-blur-md border border-green-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:border-green-500 hover:-translate-y-2 transition-all duration-300 w-full max-w-sm flex flex-col justify-between">
      <div>
        {/* Profile Avatar */}
        <div className="flex justify-center mb-5">
          <img
            src={avatarUrl}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-500 p-1 bg-white shadow-md transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://dicebear.com{name}`;
            }}
          />
        </div>

        {/* User Name & Role */}
        <div className="text-center mb-5">
          <h3 className="text-2xl font-bold text-green-950 mb-2 tracking-tight">
            {name}
          </h3>

          <span className="text-xs font-semibold text-green-700 uppercase bg-green-100 px-3 py-1 rounded-full border border-green-300">
            {role}
          </span>
        </div>

        {/* User Bio */}
        <p className="text-slate-600 text-sm text-center mb-6 leading-relaxed line-clamp-3">
          {bio}
        </p>

        {/* Skills Section */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-green-800 uppercase tracking-wider mb-3">
            Skills
          </h4>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs text-green-800 bg-green-100 px-3 py-1 rounded-full border border-green-300 hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="border-t border-green-200 pt-5 flex justify-center items-center gap-6">
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          GitHub ↗
        </a>

        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-semibold border border-green-200 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}