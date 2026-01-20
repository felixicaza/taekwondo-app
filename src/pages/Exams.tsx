import { ChevronRight } from 'lucide-react';
import { type Exam, exams } from '../consts/exams';

export const Exams = () => {
  return (
    <section className="flex flex-col gap-2 pt-4">
      <h1 className="text-xl">Selecciona tu examen</h1>
      <div className="pt-4 space-y-4">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </section>
  );
};

const ExamCard = ({ exam }: { exam: Exam }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white rounded-full shadow-xs">
      <div className="flex items-center gap-3">
        <img src={exam.img} alt={exam.range} width={50} />
        <h2 className="font-semibold text-[14px] text-gray-800">{exam.range}</h2>
      </div>
      <ChevronRight color="#191919" size={20} />
    </div>
  );
};
