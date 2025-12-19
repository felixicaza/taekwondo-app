export type Exam = {
  id: string;
  grado: string;
  color: string;
  descripcion: string;
  tipo: 'gup' | 'dan';
};

export const exams: Exam[] = [
  {
    id: 'gup-10',
    grado: '10º GUP',
    color: 'Blanco',
    descripcion:
      'Formas básicas (Sajo Jirugi, Sajo Makgi), posturas fundamentales, defensas y ataques básicos.',
    tipo: 'gup',
  },
  {
    id: 'gup-9',
    grado: '9º GUP',
    color: 'Blanco con punta Amarilla',
    descripcion:
      'Tul Saju Jirugi (cuatro direcciones), patadas frontales, combinaciones básicas.',
    tipo: 'gup',
  },
  {
    id: 'gup-8',
    grado: '8º GUP',
    color: 'Amarillo',
    descripcion:
      'Tul Chon-Ji (19 movimientos), defensas bajas y medias, patada lateral (Yop Chagi).',
    tipo: 'gup',
  },
  {
    id: 'gup-7',
    grado: '7º GUP',
    color: 'Amarillo con punta Verde',
    descripcion:
      'Tul Dan-Gun (21 movimientos), defensa contra agarre, patada circular (Dollyo Chagi).',
    tipo: 'gup',
  },
  {
    id: 'gup-6',
    grado: '6º GUP',
    color: 'Verde',
    descripcion:
      'Tul Do-San (24 movimientos), defensa contra ataque con cuchillo, patada en giro (Momdolyo Chagi).',
    tipo: 'gup',
  },
  {
    id: 'gup-5',
    grado: '5º GUP',
    color: 'Verde con punta Azul',
    descripcion:
      'Tul Won-Hyo (28 movimientos), defensa contra dos atacantes, patada cortada (Naeryo Chagi).',
    tipo: 'gup',
  },
  {
    id: 'gup-4',
    grado: '4º GUP',
    color: 'Azul',
    descripcion:
      'Tul Yul-Gok (38 movimientos), combinaciones avanzadas, técnicas de salto (Twimyo).',
    tipo: 'gup',
  },
  {
    id: 'gup-3',
    grado: '3º GUP',
    color: 'Azul con punta Roja',
    descripcion:
      'Tul Joong-Gun (32 movimientos), defensa personal avanzada (Hosinsul), rompimiento (Gyeokpa).',
    tipo: 'gup',
  },
  {
    id: 'gup-2',
    grado: '2º GUP',
    color: 'Rojo',
    descripcion:
      'Tul Toi-Gye (37 movimientos), combate preestablecido (Yaksok Daeryon), patadas especiales.',
    tipo: 'gup',
  },
  {
    id: 'gup-1',
    grado: '1º GUP',
    color: 'Rojo con punta Negra',
    descripcion:
      'Tul Hwa-Rang (29 movimientos), combate libre (Jayu Daeryon), técnicas de defensa y rompimiento avanzadas.',
    tipo: 'gup',
  },
  {
    id: 'dan-1',
    grado: 'I DAN',
    color: 'Negro',
    descripcion:
      'Tul Choong-Moo (30 movimientos), combate a contacto ligero, autodefensa, rompimiento, teoría e historia ITF.',
    tipo: 'dan',
  },
  {
    id: 'dan-2',
    grado: 'II DAN',
    color: 'Negro',
    descripcion:
      'Tul Kwang-Gae (39 movimientos), combate de alto nivel, defensa contra múltiples oponentes, enseñanza básica.',
    tipo: 'dan',
  },
  {
    id: 'dan-3',
    grado: 'III DAN',
    color: 'Negro',
    descripcion:
      'Tul Po-Eun (36 movimientos), dominio técnico completo, evaluación como instructor, teoría filosófica avanzada.',
    tipo: 'dan',
  },
];

export const getBeltColorClass = (color: string): string => {
  const colorMap: Record<string, string> = {
    Blanco: 'bg-white border-gray-300',
    'Blanco con punta Amarilla':
      'bg-gradient-to-r from-white to-yellow-400 border-yellow-400',
    Amarillo: 'bg-yellow-400 border-yellow-500',
    'Amarillo con punta Verde':
      'bg-gradient-to-r from-yellow-400 to-green-500 border-green-500',
    Verde: 'bg-green-500 border-green-600',
    'Verde con punta Azul':
      'bg-gradient-to-r from-green-500 to-blue-500 border-blue-500',
    Azul: 'bg-blue-500 border-blue-600',
    'Azul con punta Roja':
      'bg-gradient-to-r from-blue-500 to-red-600 border-red-600',
    Rojo: 'bg-red-600 border-red-700',
    'Rojo con punta Negra':
      'bg-gradient-to-r from-red-600 to-black border-black',
    Negro: 'bg-black border-gray-800',
  };
  return colorMap[color] || 'bg-gray-400 border-gray-500';
};
