import StudentCard from "./StudentCard";

function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-black text-center text-blue-600 mb-6">
        የማክሰኞ የልምምድ ገጽ 🚀
      </h1>
      <div className="max-w-md mx-auto">
        {/* የፈለግነውን መረጃ እያስተላለፍን ድጋሚ እንጠቀማለን */}
        <StudentCard name="ዮናስ ካሳ" subject="React" grade="A" />
        <StudentCard name="ሔለን ተስፋዬ" subject="Node.js" grade="A+" />
      </div>
    </div>
  );
}

export default PracticePage;
