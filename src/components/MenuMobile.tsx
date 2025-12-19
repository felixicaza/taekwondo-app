import { Book, Paperclip, User, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  to: string;
  icon: React.ReactNode;
  label: string;
}

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      to: "/",
      icon: <Book />,
      label: "Exámenes",
    },
    {
      to: "/tules",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      label: "Tules",
    },
    {
      to: "/theory",
      icon: <Paperclip />,
      label: "Teoría",
    },
    {
      to: "/account",
      icon: <User />,
      label: "Perfil",
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Header dentro del menú */}
      <header className="flex items-center justify-between flex-none w-full p-2 border-b">
        <a href="/">
          <img src="/imgs/logo.webp" width={72} alt="logo escuela" />
        </a>

        <button
          onClick={onClose}
          className="p-2 transition-colors duration-200 rounded-lg hover:bg-gray-100"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      {/* Navegación */}
      <nav className="flex flex-col py-6">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`flex items-center gap-4 px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-[#800000]/10 text-[#800000] border-l-4 border-[#800000]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                  : "none",
              }}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-lg font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Animación keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};
