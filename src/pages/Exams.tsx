import { exams, getBeltColorClass } from '../consts/exams';

export const Exams = () => {
  return (
    <div className="space-y-4 pt-4">
      {exams.map((exam) => (
        <div key={exam.id} className="p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-4 h-16 rounded-full border-2 ${getBeltColorClass(exam.color)}`}
              title={exam.color}
            />
            <h2 className="font-semibold text-gray-800">{exam.grado}</h2>
          </div>
          <p className="text-sm text-gray-600">{exam.descripcion}</p>
        </div>
      ))}
    </div>
  );
};
