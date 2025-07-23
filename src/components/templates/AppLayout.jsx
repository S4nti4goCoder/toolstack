import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { Footer } from "@/components/organisms/Footer";

const AppLayout = ({
  children,
  title = "ToolStack - Herramientas Financieras",
  description = "Tu caja de herramientas financieras completa. Calcula, simula y optimiza tus inversiones.",
}) => {
  // Estados separados para desktop y mobile
  const [desktopSidebarState, setDesktopSidebarState] = useState("expanded"); // 'expanded', 'collapsed'
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Toggle para desktop - solo entre expanded y collapsed
  const toggleDesktopSidebar = () => {
    setDesktopSidebarState((prev) =>
      prev === "expanded" ? "collapsed" : "expanded"
    );
  };

  // Toggle para mobile
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="calculadora financiera, interés compuesto, inversiones, finanzas, colombia"
        />
        <meta name="author" content="ToolStack" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>

      <div className="h-screen flex flex-col overflow-hidden">
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar DESKTOP */}
          <Sidebar
            sidebarState={desktopSidebarState}
            toggleSidebar={toggleDesktopSidebar}
          />

          {/* Sidebar MÓVIL con overlay blur */}
          {mobileSidebarOpen && (
            <>
              {/* Overlay con blur */}
              <div
                className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40 lg:hidden"
                onClick={toggleMobileSidebar}
              ></div>

              {/* Sidebar mobile */}
              <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden border-r border-gray-200">
                <div className="p-4 h-full overflow-y-auto">
                  {/* Header mobile sidebar */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                      Herramientas
                    </h2>
                    <button
                      onClick={toggleMobileSidebar}
                      className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Menu items mobile */}
                  <nav className="space-y-2">
                    <button
                      onClick={() => {
                        window.location.href = "/calculadora-interes-compuesto";
                        setMobileSidebarOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer bg-toolstack-primary text-white shadow-sm"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <span className="text-sm font-medium">
                        Interés Compuesto
                      </span>
                    </button>
                  </nav>
                </div>
              </div>
            </>
          )}

          <main className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">{children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export { AppLayout };
