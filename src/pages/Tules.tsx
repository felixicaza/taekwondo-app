import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { tuls, type Tul } from '../consts/tuls';
import { useProgress, type TulStatus } from '../context/ProgressContext';
import { Check, Clock, Circle, Search, X } from 'lucide-react';

export const Tules = () => {
  const { getCompletedCount, getProgressPercentage } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTuls = useMemo(() => {
    if (!searchQuery.trim()) {
      return tuls;
    }

    const query = searchQuery.toLowerCase().trim();
    return tuls.filter((tul) => {
      const nameMatch = tul.name.toLowerCase().includes(query);
      const koreanMatch = tul.korean_name.toLowerCase().includes(query);
      const movesMatch = tul.moves.toString().includes(query);
      const meaningMatch = tul.meaning.toLowerCase().includes(query);

      return nameMatch || koreanMatch || movesMatch || meaningMatch;
    });
  }, [searchQuery]);

  return (
    <section className="flex flex-col gap-4 pt-4">
      {/* Barra de progreso */}
      <div className="p-4 bg-white rounded-lg shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progreso total</span>
          <span className="text-sm font-bold text-primary-500">{getCompletedCount()}/17 tules</span>
        </div>
        <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full">
          <div 
            className="h-full transition-all duration-500 rounded-full bg-linear-to-r from-primary-500 to-red-400"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Selecciona tu tul</h1>
        
        {/* Buscador */}
        <div className="relative">
          <Search width={16} height={16} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Buscar por nombre, coreano, movimientos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pr-10 text-gray-900 bg-white border border-gray-300 rounded-lg pl-9 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              type='button'
              onClick={() => setSearchQuery('')}
              className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Contador de resultados */}
        {searchQuery && (
          <p className="text-sm text-gray-500">
            {filteredTuls.length} {filteredTuls.length === 1 ? 'tul encontrado' : 'tules encontrados'}
          </p>
        )}
      </div>

      {/* Lista de tules */}
      {filteredTuls.length > 0 ? (
        <article className="grid grid-cols-2 gap-3">
          {filteredTuls.map((tul) => (
            <TulCard key={tul.id} tul={tul} />
          ))}
        </article>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <Search className="w-12 h-12 text-gray-300" />
          <div>
            <p className="font-medium text-gray-600">No se encontraron tules</p>
            <p className="text-sm text-gray-500">
              Intenta buscar con otro término
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const StatusBadge = ({ status }: { status: TulStatus }) => {
  const config = {
    completed: {
      icon: Check,
      bg: 'bg-green-500',
      text: 'Completado',
    },
    in_progress: {
      icon: Clock,
      bg: 'bg-amber-500',
      text: 'En progreso',
    },
    not_started: {
      icon: Circle,
      bg: 'bg-gray-300',
      text: 'Sin empezar',
    },
  };

  const { icon: Icon, bg } = config[status];

  return (
    <div className={`absolute top-2 right-2 p-1.5 rounded-full ${bg} shadow-md`}>
      <Icon className="w-3.5 h-3.5 text-white" strokeWidth={3} />
    </div>
  );
};

const TulCard = ({ tul }: { tul: Tul }) => {
  const { getTulStatus } = useProgress();
  const status = getTulStatus(tul.id);

  return (
    <Link
      to={`/tules/${tul.id}`}
      className="flex flex-col gap-4 pb-4 bg-white rounded-b-md"
    >
      <div className="relative">
        <img src="/imgs/Rectangle.png" alt="Tul" className="w-full" />
        <StatusBadge status={status} />
      </div>
      <div className="flex flex-col px-4">
        <h2 className="text-lg font-medium">{tul.name}</h2>
        <p className="text-sm text-gray-500">{tul.moves} movimientos</p>
      </div>
    </Link>
  );
};
