import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">
            Desarrollado con ❤️ por{" "}
            <a
              href="https://github.com/S4nti4goCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-toolstack-primary hover:text-blue-600 transition-colors duration-200 hover:underline"
            >
              S4nti4goCoder
            </a>
          </div>
          <div className="text-xs text-gray-500">
            © {currentYear} ToolStack. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
