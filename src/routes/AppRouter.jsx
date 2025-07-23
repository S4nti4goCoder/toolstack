import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HomePage, CompoundInterestPage } from "@/components/pages";
import { ExamplePage } from "@/components/pages/ExamplePage";

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
          <Route path="/ejemplo-interes-compuesto" element={<ExamplePage />} />
          {/* Rutas futuras */}
          {/* <Route path="/comparador-tasas" element={<RateComparatorPage />} /> */}
          {/* <Route path="/simulador-cdt" element={<CDTSimulatorPage />} /> */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export { AppRouter };
