import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HomePage, CompoundInterestPage } from "@/components/pages";

const AppRouter = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/calculadora-interes-compuesto"
            element={<CompoundInterestPage />}
          />
          {/* Rutas futuras */}
          {/* <Route path="/comparador-tasas" element={<RateComparatorPage />} /> */}
          {/* <Route path="/simulador-cdt" element={<CDTSimulatorPage />} /> */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export { AppRouter };
