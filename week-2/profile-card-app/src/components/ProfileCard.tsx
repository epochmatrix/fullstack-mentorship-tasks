// src/components/ProfileCard.tsx
import { type UserProfile } from "../types/user.types";

export function ProfileCard({ name, role, bio, avatarUrl, skills, socials }: UserProfile) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl max-w-sm hover:border-indigo-500 hover:-translate-y-1 transition duration-300 w-full flex flex-col justify-between">
      <div>
        {/* የፕሮፋይል ፎቶ ክፍል */}
        <div className="flex justify-center mb-4">
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500/50 p-1 bg-slate-950"
            onError={(e) => { 
              (e.target as HTMLImageElement).src = `https://dicebear.com{name}`; 
            }} 
          />
        </div>

        {/* የስም እና የስራ መደብ ክፍል */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{name}</h3>
          <span className="text-xs font-semibold text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-900/50">
            {role}
          </span>
        </div>

        {/* የባዮ (Bio) ክፍል */}
        <p className="text-slate-400 text-sm text-center mb-5 line-clamp-3 leading-relaxed">
          {bio}
        </p>

        {/* የቴክኖሎጂ ችሎታዎች (Skills) ክፍል */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* የማህበራዊ ሚዲያ (Social Links) ክፍል */}
      <div className="border-t border-slate-800/80 pt-4 flex justify-center gap-6">
        <a 
          href={socials.github} 
          target="_blank" 
          rel="noreferrer" 
          className="text-sm text-slate-400 hover:text-white transition duration-200 font-medium"
        >
          GitHub ↗
        </a>
        <a 
          href={socials.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="text-sm text-slate-400 hover:text-indigo-400 transition duration-200 font-medium"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
