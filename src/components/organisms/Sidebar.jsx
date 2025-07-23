import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";

const Sidebar = ({ sidebarState, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: "compound-interest",
      title: "Interés Compuesto",
      icon: TrendingUp,
      path: "/calculadora-interes-compuesto",
      available: true,
    },
  ];

  const handleMenuClick = (item) => {
    if (item.available) {
      navigate(item.path);
    }
  };

  const isCollapsed = sidebarState === "collapsed";

  return (
    <aside
      className={`
      bg-white border-r border-gray-200 min-h-screen shadow-sm transition-all duration-300 ease-in-out
      ${isCollapsed ? "w-16" : "w-64"}
      hidden lg:block
    `}
    >
      <div className="p-4">
        {/* Header del sidebar con toggle */}
        <div className="flex items-center justify-between mb-4">
          {!isCollapsed && (
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Herramientas
            </h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 cursor-pointer ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            )}
          </Button>
        </div>

        {/* Menu items */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`
                    w-full flex items-center transition-all duration-200 cursor-pointer rounded-lg
                    ${
                      isCollapsed ? "justify-center p-3" : "space-x-3 px-3 py-2"
                    }
                    ${
                      isActive
                        ? "bg-toolstack-primary text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.title}</span>
                  )}
                </button>

                {/* Tooltip cuando está colapsado */}
                {isCollapsed && (
                  <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                    {item.title}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export { Sidebar };
