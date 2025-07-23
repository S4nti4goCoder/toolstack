import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/atoms/Button";

const Header = ({ toggleMobileSidebar }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* Botón hamburguesa - SOLO MÓVIL */}
        <div className="lg:hidden mr-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileSidebar}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </Button>
        </div>

        {/* Logo centrado en móvil, a la izquierda en desktop */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 bg-toolstack-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">🧰</span>
            </div>
            <h1 className="text-2xl font-bold text-toolstack-primary">
              ToolStack
            </h1>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
