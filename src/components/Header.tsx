import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="relative z-40 flex items-center justify-between flex-none mx-6 my-4 safe-area-top">
      <a href="/">
        <img src="/imgs/logo.webp" width={80} alt="Logo de la escuela RAM" />
      </a>

      <button
        onClick={onMenuToggle}
        className="transition-colors duration-200 rounded-lg active:bg-gray-100"
        aria-label="Abrir menú"
      >
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};
