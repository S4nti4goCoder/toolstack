import React, { useState, useEffect } from "react";
import { Calculator, Home, TrendingUp } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/Card";
import { FormField } from "@/components/molecules/FormField";
import { StatsDisplay } from "@/components/molecules/StatsDisplay";
import { calculateCompoundInterest } from "@/utils/calculator";
import { useNavigate, useLocation } from "react-router-dom";

const CompoundInterestCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    principal: "",
    annualRate: "",
    days: "",
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  // Cargar datos de ejemplo si viene del botón "Ver Ejemplo"
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("example") === "true") {
      const exampleData = {
        principal: "1000000",
        annualRate: "12.5",
        days: "365",
      };
      setFormData(exampleData);

      // Calcular automáticamente el ejemplo
      const calculationResults = calculateCompoundInterest(
        parseFloat(exampleData.principal),
        parseFloat(exampleData.annualRate),
        parseInt(exampleData.days)
      );
      setResults(calculationResults);
    }
  }, [location.search]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.principal || formData.principal <= 0) {
      newErrors.principal = "Debe ingresar un monto inicial válido";
    }

    if (
      !formData.annualRate ||
      formData.annualRate <= 0 ||
      formData.annualRate > 100
    ) {
      newErrors.annualRate = "Debe ingresar una tasa entre 0.01% y 100%";
    }

    if (!formData.days || formData.days <= 0 || formData.days > 3650) {
      newErrors.days = "Debe ingresar días entre 1 y 3650";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateForm()) {
      const principal = parseFloat(formData.principal);
      const annualRate = parseFloat(formData.annualRate);
      const days = parseInt(formData.days);

      const calculationResults = calculateCompoundInterest(
        principal,
        annualRate,
        days
      );
      setResults(calculationResults);
    }
  };

  const handleReset = () => {
    setFormData({
      principal: "",
      annualRate: "",
      days: "",
    });
    setResults(null);
    setErrors({});

    // Limpiar el parámetro example de la URL
    navigate("/calculadora-interes-compuesto", { replace: true });
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full">
      <div className="container mx-auto px-4 py-6 h-full flex flex-col">
        {/* Header moderno */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="mb-4 hover:bg-white/60 cursor-pointer text-toolstack-primary"
          >
            <Home className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl shadow-lg mb-4">
              <Calculator className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Calculadora de Interés Compuesto
            </h1>
            <p className="text-gray-600 text-lg">
              Calcula la rentabilidad diaria de tus inversiones
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 overflow-hidden">
          {/* Formulario con diseño mejorado */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-toolstack-primary to-blue-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">
                Datos de la inversión
              </h2>
              <p className="text-blue-100 text-sm">
                Ingresa los datos para calcular los resultados
              </p>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto">
              <FormField
                label="Monto inicial"
                id="principal"
                type="number"
                placeholder="1,000,000"
                value={formData.principal}
                onChange={(e) => handleInputChange("principal", e.target.value)}
                error={errors.principal}
                description="Cantidad inicial que vas a invertir"
                required
              />

              <FormField
                label="Tasa efectiva anual"
                id="annualRate"
                type="number"
                step="0.01"
                placeholder="12.5"
                value={formData.annualRate}
                onChange={(e) =>
                  handleInputChange("annualRate", e.target.value)
                }
                error={errors.annualRate}
                description="Tasa de rentabilidad anual (%)"
                required
              />

              <FormField
                label="Número de días"
                id="days"
                type="number"
                placeholder="365"
                value={formData.days}
                onChange={(e) => handleInputChange("days", e.target.value)}
                error={errors.days}
                description="Tiempo de inversión en días"
                required
              />

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCalculate}
                  className="flex-1 cursor-pointer bg-toolstack-primary hover:bg-toolstack-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="cursor-pointer border-gray-300 hover:bg-gray-50"
                  size="lg"
                >
                  Limpiar
                </Button>
              </div>
            </div>
          </div>

          {/* Resultados con diseño moderno */}
          <div className="overflow-y-auto">
            {results ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    <h3 className="text-xl font-bold">
                      Resultados del cálculo
                    </h3>
                  </div>
                  <p className="text-green-100">
                    Basado en interés compuesto diario
                  </p>
                </div>

                <StatsDisplay
                  dailyRate={results.dailyRate}
                  totalGain={results.totalGain}
                  finalAmount={results.finalAmount}
                  days={results.days}
                  className="grid-cols-1 sm:grid-cols-2 gap-4"
                />

                {/* Resumen mejorado */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Resumen de tu inversión
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-toolstack-primary">
                          ${results.principal.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          Inversión inicial
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-600">
                          +$
                          {results.totalGain.toLocaleString("es-CO", {
                            maximumFractionDigits: 0,
                          })}
                        </div>
                        <div className="text-sm text-gray-600">
                          Ganancia total
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-600">
                          {results.days} días
                        </div>
                        <div className="text-sm text-gray-600">
                          al {results.annualRate}% E.A.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 h-full flex items-center justify-center p-8">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    ¿Listo para calcular?
                  </h3>
                  <p className="text-sm">
                    Completa los datos del formulario y presiona "Calcular" para
                    ver los resultados
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CompoundInterestCalculator };
