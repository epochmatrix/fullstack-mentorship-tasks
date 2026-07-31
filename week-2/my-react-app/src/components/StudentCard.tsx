// src/components/StudentCard.tsx
import { type Student } from "./student.types";

export function StudentCard({ id, name, department, email, avatarUrl }: Student) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg max-w-sm hover:border-indigo-500 transition duration-300 w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-indigo-400 uppercase bg-indigo-950/50 px-2 py-1 rounded">
          ID: {id}
        </span>
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
      </div>
      
      {/* Profile photo Viewer */}
      <div className="flex items-center gap-4 mb-3">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-indigo-950/50 text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-900">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">{name}</h3>
          <p className="text-slate-400 text-sm">Dept: {department}</p>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 mt-4">
        <p className="text-xs text-slate-500 truncate">Email: {email}</p>
      </div>
    </div>
  );
}
