// 1. Props (TypeScript Protection)
interface StudentCardProps {
  id: string;
  name: string;
  department: string;
  email: string;
}

// 2. (Child Component)
export function StudentCard({ id, name, department, email }: StudentCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg max-w-sm hover:border-indigo-500 transition duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-indigo-400 uppercase bg-indigo-950/50 px-2 py-1 rounded">
          ID: {id}
        </span>
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-slate-400 text-sm mb-3">Dept: {department}</p>
      <div className="border-t border-slate-800 pt-3">
        <p className="text-xs text-slate-500 truncate">Email: {email}</p>
      </div>
    </div>
  );
}
