import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
          <div className="text-xs lg:text-sm text-gray-600">
            Desarrollado por{" "}
            <span className="font-semibold text-toolstack-primary">
              Tu Nombre
            </span>
          </div>
          <div className="text-xs lg:text-sm text-gray-500">
            © {currentYear} ToolStack. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
